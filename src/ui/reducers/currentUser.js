/**
 * This is a very rudimentary way of handling data of the currentUser.
 */

/**
 * External dependencies.
 */
import { BOOTSTRAP_REFERENCE } from '../actions/actions'

/**
 * Internal dependecies.
 */
import sampleReference from '../../sampleData/sample.js'
import Reference from '../../app/reference'
import ReferencePresenter from '../presenter'

const fetchReference = () => {
	return
}

const getBootstrapReference = () => {
	if ( sessionStorage ) {
		let referenceData = sessionStorage.getItem( 'referenceData' )
		return JSON.parse( referenceData )
	}

	let referenceData = fetchReference()

	if ( null === referenceData ) {
		referenceData = sampleReference
	}

	return referenceData
}

const bootstrapReference = Reference( 'Main Reference', getBootstrapReference() )

const defaultState = ReferencePresenter( bootstrapReference ).present()

/**
 * Posts reducer.
 *
 * @param {array}  state Original state. Either the default state or before action triggers.
 * @param {object} action The action object that has been created.
 * @returns {array} state The next state of the reference tree.
 */
const reference = ( state = defaultState, action ) => {
	switch ( action.type ) {
		case BOOTSTRAP_REFERENCE:
			return state
		default:
			return state
	}
}

export default reference
