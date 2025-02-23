/* eslint-disable */
/* tslint:disable */

/**
 * Mock Service Worker.
 * - Ce fichier est utilisé pour intercepter les requêtes réseau et renvoyer des réponses simulées pendant le développement.
 * @see https://github.com/mswjs/msw
 * - Ne pas modifier ce fichier.
 * - Ne pas servir ce fichier en production.
 */

/**
 * Version du package de la Mock Service Worker.
 * @constant {string}
 */
const PACKAGE_VERSION = '2.7.0'

/**
 * Checksum d'intégrité pour vérifier la version du package.
 * @constant {string}
 */
const INTEGRITY_CHECKSUM = '00729d72e3b82faf54ca8b9621dbb96f'

/**
 * Symbole utilisé pour identifier si la réponse est simulée.
 * @constant {symbol}
 */
const IS_MOCKED_RESPONSE = Symbol('isMockedResponse')

/**
 * Ensemble contenant les identifiants des clients actifs qui utilisent le service worker.
 * @type {Set<string>}
 */
const activeClientIds = new Set()

/**
 * Événement déclenché lors de l'installation du service worker.
 * Sa fonction est de faire passer le worker directement en mode actif sans attendre.
 */
self.addEventListener('install', function () {
  self.skipWaiting()
})

/**
 * Événement déclenché lors de l'activation du service worker.
 * Il permet de revendiquer tous les clients immédiatement après l'activation.
 * @param {ExtendableEvent} event - L'événement d'activation.
 */
self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim())
})

/**
 * Événement écouté lors de la réception de messages du client.
 * Traite les différents types de messages comme les requêtes de maintien en vie et de vérification d'intégrité.
 * @param {MessageEvent} event - L'événement du message envoyé par le client.
 */
self.addEventListener('message', async function (event) {
  const clientId = event.source.id

  if (!clientId || !self.clients) {
    return
  }

  const client = await self.clients.get(clientId)

  if (!client) {
    return
  }

  const allClients = await self.clients.matchAll({
    type: 'window',
  })

  switch (event.data) {
    case 'KEEPALIVE_REQUEST': {
      sendToClient(client, {
        type: 'KEEPALIVE_RESPONSE',
      })
      break
    }

    case 'INTEGRITY_CHECK_REQUEST': {
      sendToClient(client, {
        type: 'INTEGRITY_CHECK_RESPONSE',
        payload: {
          packageVersion: PACKAGE_VERSION,
          checksum: INTEGRITY_CHECKSUM,
        },
      })
      break
    }

    case 'MOCK_ACTIVATE': {
      activeClientIds.add(clientId)

      sendToClient(client, {
        type: 'MOCKING_ENABLED',
        payload: {
          client: {
            id: client.id,
            frameType: client.frameType,
          },
        },
      })
      break
    }

    case 'MOCK_DEACTIVATE': {
      activeClientIds.delete(clientId)
      break
    }

    case 'CLIENT_CLOSED': {
      activeClientIds.delete(clientId)

      const remainingClients = allClients.filter((client) => {
        return client.id !== clientId
      })

      // Unregister the service worker when there are no more clients
      if (remainingClients.length === 0) {
        self.registration.unregister()
      }

      break
    }
  }
})

/**
 * Intercepte les requêtes réseau et détermine la réponse à envoyer (simulée ou réelle).
 * @param {FetchEvent} event - L'événement de la requête interceptée.
 * @param {string} requestId - L'ID unique de la requête.
 * @returns {Promise<Response>} - La réponse générée.
 */
async function handleRequest(event, requestId) {
  const client = await resolveMainClient(event)
  const response = await getResponse(event, client, requestId)

  // Envoie de la réponse au client
  if (client && activeClientIds.has(client.id)) {
    ;(async function () {
      const responseClone = response.clone()

      sendToClient(
        client,
        {
          type: 'RESPONSE',
          payload: {
            requestId,
            isMockedResponse: IS_MOCKED_RESPONSE in response,
            type: responseClone.type,
            status: responseClone.status,
            statusText: responseClone.statusText,
            body: responseClone.body,
            headers: Object.fromEntries(responseClone.headers.entries()),
          },
        },
        [responseClone.body],
      )
    })()
  }

  return response
}

/**
 * Résout le client principal pour un événement donné, généralement celui qui a émis la requête.
 * @param {FetchEvent} event - L'événement de la requête interceptée.
 * @returns {Promise<Client | undefined>} - Le client principal résolu.
 */
async function resolveMainClient(event) {
  const client = await self.clients.get(event.clientId)

  if (activeClientIds.has(event.clientId)) {
    return client
  }

  if (client?.frameType === 'top-level') {
    return client
  }

  const allClients = await self.clients.matchAll({
    type: 'window',
  })

  return allClients
    .filter((client) => {
      // Retourne uniquement les clients visibles.
      return client.visibilityState === 'visible'
    })
    .find((client) => {
      // Trouve le client dans la liste active.
      return activeClientIds.has(client.id)
    })
}

/**
 * Récupère la réponse à envoyer en fonction du client et de la requête.
 * @param {FetchEvent} event - L'événement de la requête interceptée.
 * @param {Client} client - Le client qui a envoyé la requête.
 * @param {string} requestId - L'ID unique de la requête.
 * @returns {Promise<Response>} - La réponse à renvoyer.
 */
async function getResponse(event, client, requestId) {
  const { request } = event
  const requestClone = request.clone()

  function passthrough() {
    const headers = new Headers(requestClone.headers)
    const acceptHeader = headers.get('accept')
    if (acceptHeader) {
      const values = acceptHeader.split(',').map((value) => value.trim())
      const filteredValues = values.filter(
        (value) => value !== 'msw/passthrough',
      )
      if (filteredValues.length > 0) {
        headers.set('accept', filteredValues.join(', '))
      } else {
        headers.delete('accept')
      }
    }
    return fetch(requestClone, { headers })
  }

  if (!client || !activeClientIds.has(client.id)) {
    return passthrough()
  }

  const requestBuffer = await request.arrayBuffer()
  const clientMessage = await sendToClient(
    client,
    {
      type: 'REQUEST',
      payload: {
        id: requestId,
        url: request.url,
        mode: request.mode,
        method: request.method,
        headers: Object.fromEntries(request.headers.entries()),
        cache: request.cache,
        credentials: request.credentials,
        destination: request.destination,
        integrity: request.integrity,
        redirect: request.redirect,
        referrer: request.referrer,
        referrerPolicy: request.referrerPolicy,
        body: requestBuffer,
        keepalive: request.keepalive,
      },
    },
    [requestBuffer],
  )

  switch (clientMessage.type) {
    case 'MOCK_RESPONSE': {
      return respondWithMock(clientMessage.data)
    }

    case 'PASSTHROUGH': {
      return passthrough()
    }
  }

  return passthrough()
}

/**
 * Envoie un message au client via le Service Worker.
 * @param {Client} client - Le client auquel envoyer le message.
 * @param {object} message - Le message à envoyer.
 * @param {Array} [transferrables=[]] - Les transferrables à inclure dans le message.
 * @returns {Promise<any>} - La promesse avec la réponse du client.
 */
function sendToClient(client, message, transferrables = []) {
  return new Promise((resolve, reject) => {
    const channel = new MessageChannel()

    channel.port1.onmessage = (event) => {
      if (event.data && event.data.error) {
        return reject(event.data.error)
      }

      resolve(event.data)
    }

    client.postMessage(
      message,
      [channel.port2].concat(transferrables.filter(Boolean)),
    )
  })
}

/**
 * Crée une réponse simulée à partir de la réponse fournie.
 * @param {Response} response - La réponse simulée à renvoyer.
 * @returns {Response} - La réponse simulée.
 */
async function respondWithMock(response) {
  if (response.status === 0) {
    return Response.error()
  }

  const mockedResponse = new Response(response.body, response)

  Reflect.defineProperty(mockedResponse, IS_MOCKED_RESPONSE, {
    value: true,
    enumerable: true,
  })

  return mockedResponse
}
