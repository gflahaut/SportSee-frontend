## Modules

<dl>
<dt><a href="#module_UserProfileContext">UserProfileContext</a> ⇒ <code>React.Context</code></dt>
<dd><p>Contexte qui permet de partager l&#39;ID du profil utilisateur au sein de l&#39;application.
Ce contexte est utilisé pour gérer et accéder à l&#39;ID du profil utilisateur, récupéré dynamiquement à partir de l&#39;URL.</p>
</dd>
<dt><a href="#module_handlers">handlers</a></dt>
<dd><p>Fichier qui définit les handlers de requêtes HTTP pour les données utilisateur simulées à l&#39;aide de <code>msw</code>.
Ces handlers sont utilisés pour intercepter les appels API durant les tests ou le développement,
afin de retourner des réponses simulées en utilisant des données fictives.</p>
</dd>
<dt><a href="#module_mswConfig">mswConfig</a></dt>
<dd><p>Fichier de configuration du Mock Service Worker (MSW) pour simuler des réponses d&#39;API.
Ce fichier initialise un serveur de travail (worker) qui interceptera les requêtes réseau
et retournera des réponses simulées définies dans les handlers.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#root">root</a> : <code>ReactDOM.Root</code></dt>
<dd><p>Création de la racine React pour le rendu de l&#39;application.</p>
</dd>
<dt><a href="#mockUserData">mockUserData</a> : <code>Object</code></dt>
<dd><p>Données simulées pour un utilisateur.
Ces données incluent les informations de base de l&#39;utilisateur, son score d&#39;aujourd&#39;hui, 
ainsi que les informations nutritionnelles et d&#39;activité physique.</p>
</dd>
<dt><a href="#mockUserActivity">mockUserActivity</a> : <code>Object</code></dt>
<dd><p>Données simulées pour l&#39;activité d&#39;un utilisateur.
Ces données incluent l&#39;ID de l&#39;utilisateur ainsi qu&#39;un historique de ses sessions d&#39;activité.</p>
</dd>
<dt><a href="#mockUserAverageSessions">mockUserAverageSessions</a> : <code>Object</code></dt>
<dd><p>Données simulées pour les sessions moyennes d&#39;un utilisateur.
Ces données incluent l&#39;ID de l&#39;utilisateur et la durée de ses sessions d&#39;entraînement moyennes.</p>
</dd>
<dt><a href="#mockUserPerformance">mockUserPerformance</a> : <code>Object</code></dt>
<dd><p>Données simulées pour la performance d&#39;un utilisateur.
Ces données incluent l&#39;ID de l&#39;utilisateur, ainsi qu&#39;une classification des différents types de performances 
et des valeurs associées pour chaque type.</p>
</dd>
<dt><a href="#API_BASE_URL">API_BASE_URL</a> : <code>string</code></dt>
<dd><p>URL de base de l&#39;API.</p>
</dd>
<dt><a href="#USE_MOCKS">USE_MOCKS</a> : <code>boolean</code></dt>
<dd><p>Indicateur d&#39;utilisation des données mockées.</p>
</dd>
<dt><a href="#getUserData">getUserData</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Récupère les données utilisateur.</p>
</dd>
<dt><a href="#getUserActivity">getUserActivity</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Récupère l&#39;activité de l&#39;utilisateur.</p>
</dd>
<dt><a href="#getUserAverageSessions">getUserAverageSessions</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Récupère les sessions moyennes de l&#39;utilisateur.</p>
</dd>
<dt><a href="#getUserPerformance">getUserPerformance</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Récupère la performance de l&#39;utilisateur.</p>
</dd>
<dt><a href="#normalizeUserData">normalizeUserData</a> ⇒ <code>Object</code></dt>
<dd><p>Normalise les données utilisateur.</p>
</dd>
<dt><a href="#normalizeUserActivity">normalizeUserActivity</a> ⇒ <code>Object</code></dt>
<dd><p>Normalise les données d&#39;activité utilisateur.</p>
</dd>
<dt><a href="#normalizeUserAverageSessions">normalizeUserAverageSessions</a> ⇒ <code>Object</code></dt>
<dd><p>Normalise les sessions moyennes de l&#39;utilisateur.</p>
</dd>
<dt><a href="#normalizeUserPerformance">normalizeUserPerformance</a> ⇒ <code>Object</code></dt>
<dd><p>Normalise les performances de l&#39;utilisateur.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#App">App()</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Composant principal de l&#39;application contenant la navigation et les routes.</p>
</dd>
<dt><a href="#CustomTooltip">CustomTooltip(props)</a> ⇒ <code>JSX.Element</code> | <code>null</code></dt>
<dd><p>Tooltip personnalisé affiché lors du survol d&#39;une barre du graphique.
Affiche les valeurs de poids et de calories brûlées pour la journée sélectionnée.</p>
</dd>
<dt><a href="#CustomBarChart">CustomBarChart(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Composant pour afficher un graphique à barres représentant l&#39;activité quotidienne de l&#39;utilisateur.
Le graphique affiche deux séries de données : le poids (kg) et les calories brûlées (kcal).</p>
</dd>
<dt><a href="#Header">Header(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Composant qui affiche un message de bienvenue et des félicitations à l&#39;utilisateur, en utilisant son prénom
et en vérifiant s&#39;il a atteint ses objectifs.</p>
</dd>
<dt><a href="#HorizontalNav">HorizontalNav()</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Composant de la barre de navigation horizontale affichant les liens vers l&#39;accueil, le profil,
les réglages et la communauté. Le lien vers le profil est dynamique, basé sur l&#39;ID de l&#39;utilisateur.</p>
</dd>
<dt><a href="#Map">Map(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Composant qui affiche une carte avec l&#39;icône, la valeur du nutriment et son type.
La valeur est formatée avec une unité appropriée.</p>
</dd>
<dt><a href="#UserProfile">UserProfile()</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Composant affichant le profil utilisateur avec des données visuelles et statistiques.
Il récupère les données depuis des APIs externes, les normalise et les affiche sous forme de graphiques et de cartes.</p>
</dd>
<dt><a href="#VerticalNav">VerticalNav()</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Composant de la barre de navigation verticale.
Il affiche des icônes représentant des activités physiques.</p>
</dd>
<dt><a href="#Communauty">Communauty()</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Composant de la page Communauty.</p>
</dd>
<dt><a href="#Home">Home()</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Composant représentant la page d&#39;accueil.</p>
</dd>
<dt><a href="#NotFound">NotFound()</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Composant fonctionnel pour afficher une page d&#39;erreur 404.</p>
<p>Il récupère le message d&#39;erreur passé dans les <code>state</code> de l&#39;URL (s&#39;il existe), sinon il affiche un message par défaut.</p>
</dd>
<dt><a href="#Settings">Settings()</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Composant fonctionnel représentant une page de paramètres en développement.</p>
<p>Le composant affiche un titre, un message d&#39;accueil et une note indiquant que la page est en cours de développement.</p>
</dd>
<dt><a href="#CustomToolTip">CustomToolTip(props)</a> ⇒ <code>React.Component</code> | <code>null</code></dt>
<dd><p>Composant de tooltip personnalisé pour le graphique d&#39;activité.
Affiche les valeurs de poids (kg) et de calories brûlées (kcal) lorsque l&#39;utilisateur survole une barre du graphique.</p>
</dd>
<dt><a href="#CustomLineChart">CustomLineChart(props)</a> ⇒ <code>React.Component</code></dt>
<dd><p>Composant graphique représentant la durée moyenne des sessions sous forme de courbe.
Le graphique affiche la durée des sessions pour chaque jour de la semaine.</p>
</dd>
<dt><a href="#CustomRadarChart">CustomRadarChart(props)</a> ⇒ <code>React.Component</code></dt>
<dd><p>Composant graphique radar représentant la performance de l&#39;utilisateur dans différents domaines
(cardio, énergie, endurance, etc.) sous forme de graphique radar.</p>
</dd>
<dt><a href="#CustomRadialBarChart">CustomRadialBarChart(props)</a> ⇒ <code>React.Component</code></dt>
<dd><p>Composant graphique circulaire (radial) représentant le score de l&#39;utilisateur par rapport à son objectif.</p>
<p>Ce graphique affiche un score sous forme de diagramme circulaire, où une partie du cercle est colorée
en rouge, indiquant le score, et l&#39;autre partie est transparente, représentant le reste.</p>
</dd>
</dl>

<a name="module_UserProfileContext"></a>

## UserProfileContext ⇒ <code>React.Context</code>
Contexte qui permet de partager l'ID du profil utilisateur au sein de l'application.Ce contexte est utilisé pour gérer et accéder à l'ID du profil utilisateur, récupéré dynamiquement à partir de l'URL.

**Returns**: <code>React.Context</code> - UserProfileContext - Le contexte qui contient l'ID du profil et la fonction pour le mettre à jour.  
**Example**  
```js
import { useUserProfile } from './path/to/context';// Utilisation du contexte pour accéder à l'ID du profilconst { profileId } = useUserProfile();
```

* [UserProfileContext](#module_UserProfileContext) ⇒ <code>React.Context</code>
    * [module.exports](#exp_module_UserProfileContext--module.exports) : <code>React.Context</code> ⏏
        * [.UserProfileProvider](#module_UserProfileContext--module.exports.UserProfileProvider) ⇒ <code>JSX.Element</code>
        * [.useUserProfile](#module_UserProfileContext--module.exports.useUserProfile) ⇒ <code>Object</code>

<a name="exp_module_UserProfileContext--module.exports"></a>

### module.exports : <code>React.Context</code> ⏏
Le contexte `UserProfileContext` qui permet à l'application d'accéder et de modifier l'ID du profil utilisateur.

**Kind**: Exported member  
<a name="module_UserProfileContext--module.exports.UserProfileProvider"></a>

#### module.exports.UserProfileProvider ⇒ <code>JSX.Element</code>
Composant fournisseur (`Provider`) pour le `UserProfileContext`.Ce composant enveloppe l'application et fournit l'ID du profil utilisateur ainsi qu'une fonction pour le mettre à jour.Il utilise le hook `useParams` pour récupérer l'ID dynamique de l'URL.

**Kind**: static constant of [<code>module.exports</code>](#exp_module_UserProfileContext--module.exports)  
**Returns**: <code>JSX.Element</code> - Le fournisseur `UserProfileContext.Provider` qui permet à ses enfants d'accéder au contexte.  
**Component**:   

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | Les propriétés du composant. |
| props.children | <code>React.ReactNode</code> | Les enfants à envelopper avec ce provider. |

**Example**  
```js
<UserProfileProvider>  <YourComponent /></UserProfileProvider>
```
<a name="module_UserProfileContext--module.exports.useUserProfile"></a>

#### module.exports.useUserProfile ⇒ <code>Object</code>
Hook personnalisé pour accéder au contexte `UserProfileContext`.Ce hook retourne les valeurs partagées par le contexte, c'est-à-dire l'ID du profil utilisateur et la fonction de mise à jour.

**Kind**: static constant of [<code>module.exports</code>](#exp_module_UserProfileContext--module.exports)  
**Returns**: <code>Object</code> - L'objet contenant :- `profileId`: L'ID du profil utilisateur actuellement sélectionné.- `setProfileId`: La fonction pour mettre à jour l'ID du profil utilisateur.  
<a name="module_handlers"></a>

## handlers
Fichier qui définit les handlers de requêtes HTTP pour les données utilisateur simulées à l'aide de `msw`.Ces handlers sont utilisés pour intercepter les appels API durant les tests ou le développement,afin de retourner des réponses simulées en utilisant des données fictives.

**Example**  
```js
import { handlers } from './path/to/this/file';// Ajout des handlers à un serveur de test ou de développementworker.start();
```
<a name="module_handlers.handlers"></a>

### handlers.handlers : <code>Array.&lt;Object&gt;</code>
Liste des handlers pour les différentes requêtes HTTP liées aux données utilisateur.Ces handlers interceptent les requêtes GET et retournent des réponses simulées pour chaque endpoint.- `/user/:id` : Retourne les informations de base de l'utilisateur.- `/user/:id/activity` : Retourne les données d'activité de l'utilisateur.- `/user/:id/average-sessions` : Retourne les sessions moyennes de l'utilisateur.- `/user/:id/performance` : Retourne les données de performance de l'utilisateur.

**Kind**: static constant of [<code>handlers</code>](#module_handlers)  
<a name="module_mswConfig"></a>

## mswConfig
Fichier de configuration du Mock Service Worker (MSW) pour simuler des réponses d'API.Ce fichier initialise un serveur de travail (worker) qui interceptera les requêtes réseauet retournera des réponses simulées définies dans les handlers.

**Example**  
```js
import { worker } from './path/to/this/file';// Démarrer le worker dans votre application ou vos testsworker.start();
```
<a name="module_mswConfig.worker"></a>

### mswConfig.worker : <code>Worker</code>
Initialise le worker MSW avec les handlers définis dans le fichier `handlers.js`.Ce worker interceptera toutes les requêtes réseau correspondantes et retournerades réponses simulées basées sur les données définies dans `handlers`.

**Kind**: static constant of [<code>mswConfig</code>](#module_mswConfig)  
<a name="root"></a>

## root : <code>ReactDOM.Root</code>
Création de la racine React pour le rendu de l'application.

**Kind**: global constant  
<a name="mockUserData"></a>

## mockUserData : <code>Object</code>
Données simulées pour un utilisateur.Ces données incluent les informations de base de l'utilisateur, son score d'aujourd'hui, ainsi que les informations nutritionnelles et d'activité physique.

**Kind**: global constant  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | L'ID de l'utilisateur. |
| userInfos | <code>Object</code> | Informations de l'utilisateur. |
| userInfos.firstName | <code>string</code> | Le prénom de l'utilisateur. |
| userInfos.lastName | <code>string</code> | Le nom de l'utilisateur. |
| userInfos.age | <code>number</code> | L'âge de l'utilisateur. |
| todayScore | <code>number</code> | Le score de l'utilisateur pour aujourd'hui (de 0 à 1). |
| keyData | <code>Object</code> | Données nutritionnelles clés de l'utilisateur. |
| keyData.calorieCount | <code>number</code> | Le nombre de calories consommées. |
| keyData.proteinCount | <code>number</code> | Le nombre de protéines consommées. |
| keyData.carbohydrateCount | <code>number</code> | Le nombre de glucides consommés. |
| keyData.lipidCount | <code>number</code> | Le nombre de lipides consommés. |

<a name="mockUserActivity"></a>

## mockUserActivity : <code>Object</code>
Données simulées pour l'activité d'un utilisateur.Ces données incluent l'ID de l'utilisateur ainsi qu'un historique de ses sessions d'activité.

**Kind**: global constant  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| userId | <code>number</code> | L'ID de l'utilisateur. |
| sessions | <code>Array.&lt;Object&gt;</code> | Liste des sessions d'activité de l'utilisateur. |
| sessions.day | <code>string</code> | La date de la session (format YYYY-MM-DD). |
| sessions.kilogram | <code>number</code> | Le poids de l'utilisateur pendant cette session (en kg). |
| sessions.calories | <code>number</code> | Le nombre de calories brûlées pendant cette session. |

<a name="mockUserAverageSessions"></a>

## mockUserAverageSessions : <code>Object</code>
Données simulées pour les sessions moyennes d'un utilisateur.Ces données incluent l'ID de l'utilisateur et la durée de ses sessions d'entraînement moyennes.

**Kind**: global constant  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| userId | <code>number</code> | L'ID de l'utilisateur. |
| sessions | <code>Array.&lt;Object&gt;</code> | Liste des sessions avec leur durée. |
| sessions.day | <code>number</code> | Le jour de la session. |
| sessions.sessionLength | <code>number</code> | La durée de la session (en minutes). |

<a name="mockUserPerformance"></a>

## mockUserPerformance : <code>Object</code>
Données simulées pour la performance d'un utilisateur.Ces données incluent l'ID de l'utilisateur, ainsi qu'une classification des différents types de performances et des valeurs associées pour chaque type.

**Kind**: global constant  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| userId | <code>number</code> | L'ID de l'utilisateur. |
| kind | <code>Object</code> | Un objet qui associe un identifiant numérique à un type de performance. |
| kind[1 | <code>number</code> | Type de performance "cardio". |
| kind[2 | <code>number</code> | Type de performance "énergie". |
| kind[3 | <code>number</code> | Type de performance "endurance". |
| kind[4 | <code>number</code> | Type de performance "force". |
| kind[5 | <code>number</code> | Type de performance "vitesse". |
| kind[6 | <code>number</code> | Type de performance "intensité". |
| data | <code>Array.&lt;Object&gt;</code> | Liste des performances avec leurs valeurs et types. |
| data.value | <code>number</code> | La valeur de la performance. |
| data.kind | <code>number</code> | L'identifiant du type de performance. |

<a name="API_BASE_URL"></a>

## API\_BASE\_URL : <code>string</code>
URL de base de l'API.

**Kind**: global constant  
<a name="USE_MOCKS"></a>

## USE\_MOCKS : <code>boolean</code>
Indicateur d'utilisation des données mockées.

**Kind**: global constant  
<a name="getUserData"></a>

## getUserData ⇒ <code>Promise.&lt;Object&gt;</code>
Récupère les données utilisateur.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - Données de l'utilisateur.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Identifiant de l'utilisateur. |

<a name="getUserActivity"></a>

## getUserActivity ⇒ <code>Promise.&lt;Object&gt;</code>
Récupère l'activité de l'utilisateur.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - Activité de l'utilisateur.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Identifiant de l'utilisateur. |

<a name="getUserAverageSessions"></a>

## getUserAverageSessions ⇒ <code>Promise.&lt;Object&gt;</code>
Récupère les sessions moyennes de l'utilisateur.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - Sessions moyennes de l'utilisateur.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Identifiant de l'utilisateur. |

<a name="getUserPerformance"></a>

## getUserPerformance ⇒ <code>Promise.&lt;Object&gt;</code>
Récupère la performance de l'utilisateur.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - Performance de l'utilisateur.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Identifiant de l'utilisateur. |

<a name="normalizeUserData"></a>

## normalizeUserData ⇒ <code>Object</code>
Normalise les données utilisateur.

**Kind**: global constant  
**Returns**: <code>Object</code> - Données utilisateur normalisées.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Données brutes de l'utilisateur. |

<a name="normalizeUserActivity"></a>

## normalizeUserActivity ⇒ <code>Object</code>
Normalise les données d'activité utilisateur.

**Kind**: global constant  
**Returns**: <code>Object</code> - Données d'activité normalisées.  

| Param | Type | Description |
| --- | --- | --- |
| activity | <code>Object</code> | Données brutes d'activité. |

<a name="normalizeUserAverageSessions"></a>

## normalizeUserAverageSessions ⇒ <code>Object</code>
Normalise les sessions moyennes de l'utilisateur.

**Kind**: global constant  
**Returns**: <code>Object</code> - Données des sessions moyennes normalisées.  

| Param | Type | Description |
| --- | --- | --- |
| averageSessions | <code>Object</code> | Données brutes des sessions moyennes. |

<a name="normalizeUserPerformance"></a>

## normalizeUserPerformance ⇒ <code>Object</code>
Normalise les performances de l'utilisateur.

**Kind**: global constant  
**Returns**: <code>Object</code> - Données de performance normalisées.  

| Param | Type | Description |
| --- | --- | --- |
| performance | <code>Object</code> | Données brutes de performance. |

<a name="App"></a>

## App() ⇒ <code>JSX.Element</code>
Composant principal de l'application contenant la navigation et les routes.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - Composant React de l'application.  
<a name="CustomTooltip"></a>

## CustomTooltip(props) ⇒ <code>JSX.Element</code> \| <code>null</code>
Tooltip personnalisé affiché lors du survol d'une barre du graphique.Affiche les valeurs de poids et de calories brûlées pour la journée sélectionnée.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> \| <code>null</code> - Un élément JSX représentant le tooltip ou null si le tooltip n'est pas actif.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | Les propriétés passées au composant Tooltip. |
| props.active | <code>boolean</code> | Indique si le tooltip est actif (visible) ou non. |
| props.payload | <code>Array</code> | Contient les données à afficher dans le tooltip. |
| props.label | <code>string</code> | Le label (la journée) à afficher dans le tooltip. |

<a name="CustomBarChart"></a>

## CustomBarChart(props) ⇒ <code>JSX.Element</code>
Composant pour afficher un graphique à barres représentant l'activité quotidienne de l'utilisateur.Le graphique affiche deux séries de données : le poids (kg) et les calories brûlées (kcal).

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - Un élément JSX représentant le graphique à barres.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | Les propriétés passées au composant. |
| props.data | <code>Array</code> | Les données à afficher dans le graphique. |

<a name="Header"></a>

## Header(props) ⇒ <code>JSX.Element</code>
Composant qui affiche un message de bienvenue et des félicitations à l'utilisateur, en utilisant son prénomet en vérifiant s'il a atteint ses objectifs.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - Un élément JSX représentant l'en-tête avec un message personnalisé pour l'utilisateur.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | Les propriétés passées au composant. |
| props.userId | <code>string</code> | L'ID de l'utilisateur pour récupérer ses données depuis l'API. |

<a name="HorizontalNav"></a>

## HorizontalNav() ⇒ <code>JSX.Element</code>
Composant de la barre de navigation horizontale affichant les liens vers l'accueil, le profil,les réglages et la communauté. Le lien vers le profil est dynamique, basé sur l'ID de l'utilisateur.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - Un élément JSX représentant la barre de navigation horizontale avec le logo et les liens vers les différentes pages.  
<a name="Map"></a>

## Map(props) ⇒ <code>JSX.Element</code>
Composant qui affiche une carte avec l'icône, la valeur du nutriment et son type.La valeur est formatée avec une unité appropriée.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - Un élément JSX affichant l'icône du nutriment, sa valeur et son type.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | Les propriétés du composant. |
| props.type | <code>string</code> | Le type de nutriment à afficher (Calories, Glucides, Protéines, Lipides). |
| props.text | <code>number</code> | La valeur numérique du nutriment. |

<a name="UserProfile"></a>

## UserProfile() ⇒ <code>JSX.Element</code>
Composant affichant le profil utilisateur avec des données visuelles et statistiques.Il récupère les données depuis des APIs externes, les normalise et les affiche sous forme de graphiques et de cartes.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - Un composant JSX affichant le profil de l'utilisateur avec ses données personnelles, des graphiques et des cartes.  
<a name="VerticalNav"></a>

## VerticalNav() ⇒ <code>JSX.Element</code>
Composant de la barre de navigation verticale.Il affiche des icônes représentant des activités physiques.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - La structure HTML de la barre de navigation verticale.  
<a name="Communauty"></a>

## Communauty() ⇒ <code>JSX.Element</code>
Composant de la page Communauty.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - Composant React représentant la page Communauty.  
<a name="Home"></a>

## Home() ⇒ <code>JSX.Element</code>
Composant représentant la page d'accueil.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - Composant React de la page Home.  
<a name="Home..handleProfileClick"></a>

### Home~handleProfileClick(id)
Gère la sélection d'un profil en mettant à jour l'identifiant du profil dans le contexte.

**Kind**: inner method of [<code>Home</code>](#Home)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Identifiant de l'utilisateur sélectionné. |

<a name="NotFound"></a>

## NotFound() ⇒ <code>JSX.Element</code>
Composant fonctionnel pour afficher une page d'erreur 404.Il récupère le message d'erreur passé dans les `state` de l'URL (s'il existe), sinon il affiche un message par défaut.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - Le JSX du composant `NotFound` qui inclut le message d'erreur et un lien de retour à la page d'accueil.  
<a name="Settings"></a>

## Settings() ⇒ <code>JSX.Element</code>
Composant fonctionnel représentant une page de paramètres en développement.Le composant affiche un titre, un message d'accueil et une note indiquant que la page est en cours de développement.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - Le JSX du composant `Settings` qui inclut un message d'accueil pour les utilisateurs.  
<a name="CustomToolTip"></a>

## CustomToolTip(props) ⇒ <code>React.Component</code> \| <code>null</code>
Composant de tooltip personnalisé pour le graphique d'activité.Affiche les valeurs de poids (kg) et de calories brûlées (kcal) lorsque l'utilisateur survole une barre du graphique.

**Kind**: global function  
**Returns**: <code>React.Component</code> \| <code>null</code> - Un élément JSX représentant le tooltip ou `null` si le tooltip n'est pas actif.  
**Category**: Components  
**Component**:   

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | Les propriétés du composant. |
| props.active | <code>boolean</code> | Indique si le tooltip est actif (visible) ou non. |
| props.payload | <code>Array</code> | Contient les données à afficher dans le tooltip. Ce tableau devrait avoir deux objets avec les valeurs `value` représentant le poids et les calories. |

**Example**  
```js
// Exemple d'utilisation du composant CustomToolTip<CustomToolTip active={true} payload={[{ value: 70 }, { value: 250 }]} />
```
<a name="CustomLineChart"></a>

## CustomLineChart(props) ⇒ <code>React.Component</code>
Composant graphique représentant la durée moyenne des sessions sous forme de courbe.Le graphique affiche la durée des sessions pour chaque jour de la semaine.

**Kind**: global function  
**Returns**: <code>React.Component</code> - Un graphique de type LineChart affichant la durée moyenne des sessions.  
**Category**: Components  
**Component**:   

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | Les propriétés du composant. |
| props.data | <code>Array</code> | Données à afficher, chaque objet contenant un `day` (jour) et `sessionLength` (durée de la session). |

**Example**  
```js
// Exemple d'utilisation du composant CustomLineChart<CustomLineChart data={[{ day: 1, sessionLength: 40 }, { day: 2, sessionLength: 50 }, ...]} />
```
<a name="CustomLineChart..CustomTooltip"></a>

### CustomLineChart~CustomTooltip(props) ⇒ <code>React.Component</code> \| <code>null</code>
Tooltip personnalisé affichant la durée de la session en minutes.

**Kind**: inner method of [<code>CustomLineChart</code>](#CustomLineChart)  
**Returns**: <code>React.Component</code> \| <code>null</code> - Un composant Tooltip ou null si pas actif.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | Les propriétés du tooltip. |
| props.active | <code>boolean</code> | Indique si le tooltip est actif. |
| props.payload | <code>Array</code> | Données associées à la session, avec la durée de la session. |

<a name="CustomRadarChart"></a>

## CustomRadarChart(props) ⇒ <code>React.Component</code>
Composant graphique radar représentant la performance de l'utilisateur dans différents domaines(cardio, énergie, endurance, etc.) sous forme de graphique radar.

**Kind**: global function  
**Returns**: <code>React.Component</code> - Un graphique radar affichant la performance de l'utilisateur.  
**Category**: Components  
**Component**:   

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | Les propriétés du composant. |
| props.data | <code>Array</code> | Données à afficher, chaque objet contenant un `kind` (type de performance) et `value` (valeur de la performance). |

**Example**  
```js
// Exemple d'utilisation du composant CustomRadarChart<CustomRadarChart data={[{ kind: 'cardio', value: 80 }, { kind: 'energy', value: 60 }, ...]} />
```
<a name="CustomRadialBarChart"></a>

## CustomRadialBarChart(props) ⇒ <code>React.Component</code>
Composant graphique circulaire (radial) représentant le score de l'utilisateur par rapport à son objectif.Ce graphique affiche un score sous forme de diagramme circulaire, où une partie du cercle est coloréeen rouge, indiquant le score, et l'autre partie est transparente, représentant le reste.

**Kind**: global function  
**Returns**: <code>React.Component</code> - Un graphique circulaire représentant le score de l'utilisateur.  
**Category**: Components  
**Component**:   

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | Les propriétés du composant. |
| props.data | <code>Array</code> | Un tableau contenant les données de l'utilisateur, avec un champ `todayScore` représentant son score du jour. |

**Example**  
```js
// Exemple d'utilisation du composant CustomRadialBarChart<CustomRadialBarChart data={[{ todayScore: 0.75 }]} />
```
