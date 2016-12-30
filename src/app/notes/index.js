'use-strict'

/**
 * Notes are the internal entity used for collections of notes.
 */

/**
 * Internal dependecies.
 */
import { uniqueArray } from '../utilities'

// Base notes type.
const Notes = ( notes ) => {
	let collection = [ ...notes ]

	const getTypes = ( list ) => uniqueArray( list.map( note => note.type ) )

	return {
		collection,

		groupByType: () => {
			let groupedByType = {}

			getTypes( collection ).map( type => groupedByType[ type ] = collection.filter( note => note.type === type ) )

			return groupedByType
		}
	}
}

export default Notes
