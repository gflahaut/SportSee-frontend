/**
 * Fichier de configuration du Mock Service Worker (MSW) pour simuler des réponses d'API.
 * Ce fichier initialise un serveur de travail (worker) qui interceptera les requêtes réseau
 * et retournera des réponses simulées définies dans les handlers.
 * 
 * @module mswConfig
 * @example
 * import { worker } from './path/to/this/file';
 * 
 * // Démarrer le worker dans votre application ou vos tests
 * worker.start();
 */

import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

/**
 * Initialise le worker MSW avec les handlers définis dans le fichier `handlers.js`.
 * Ce worker interceptera toutes les requêtes réseau correspondantes et retournera
 * des réponses simulées basées sur les données définies dans `handlers`.
 * 
 * @constant
 * @type {Worker} worker - L'instance du worker MSW configurée avec les handlers.
 */
export const worker = setupWorker(...handlers);
