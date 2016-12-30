'use-strict'

/**
 * Internal dependecies.
 */
import sampleReference from './sampleData/sample.js'
import Reference from './app/reference/'

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

console.log( bootstrapReference )
console.log( bootstrapReference.getRoutesGroupedBySchemaType() )
