import PropTypes from 'prop-types'

/**
 * Composant de tooltip personnalisé pour le graphique d'activité.
 * Affiche les valeurs de poids (kg) et de calories brûlées (kcal) lorsque l'utilisateur survole une barre du graphique.
 *
 * @category Components
 * @component
 * @example
 * // Exemple d'utilisation du composant CustomToolTip
 * <CustomToolTip active={true} payload={[{ value: 70 }, { value: 250 }]} />
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {boolean} props.active - Indique si le tooltip est actif (visible) ou non.
 * @param {Array} props.payload - Contient les données à afficher dans le tooltip. Ce tableau devrait avoir deux objets avec les valeurs `value` représentant le poids et les calories.
 * 
 * @returns {React.Component|null} Un élément JSX représentant le tooltip ou `null` si le tooltip n'est pas actif.
 */
function CustomToolTip({ active, payload }) {
	if (active && payload && payload.length) {
		return (
			<div className="tooltip">
				<p>{payload[0].value + 'kg'}</p>
				<p>{payload[1].value + 'Kcal'}</p>
			</div>
		)
	}
	return null
}

CustomToolTip.propTypes = {
	/**
	 * Indique si le tooltip est actif (visible) ou non.
	 * @type {boolean}
	 */
	active: PropTypes.bool,

	/**
	 * Le payload du tooltip contenant les données à afficher.
	 * Doit être un tableau d'objets, chaque objet ayant une propriété `value`.
	 * Le premier objet représente le poids (en kg) et le deuxième les calories (en Kcal).
	 * @type {Array}
	 * @example [{ value: 70 }, { value: 250 }]
	 */
	payload: PropTypes.arrayOf(PropTypes.object),
}

export default CustomToolTip
