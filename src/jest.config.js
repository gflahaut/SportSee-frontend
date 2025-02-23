/**
 * @fileoverview Configuration de Jest pour les tests de l'application.
 * Définit les fichiers de configuration à exécuter après l'environnement de test.
 */

module.exports = {
  /**
   * Spécifie les fichiers à charger après la configuration de l'environnement de test.
   * @type {string[]}
   */
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
