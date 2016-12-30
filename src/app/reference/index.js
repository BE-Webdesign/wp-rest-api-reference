'use-strict'

/**
 * The Reference type is used to denote different versions of a WP REST API reference.
 */

/**
 * Internal dependecies.
 */
import { uniqueArray } from '../utilities'

const Reference = ( referenceName, referenceData ) => {
	const name = referenceName
	const data = referenceData

	const getRouteNames = () => {
		return Object.keys( data.routes )
	}

	const getRoutes = () => {
		return getRouteNames().map( routeName => Object.assign( {}, { routeName }, data.routes[ routeName ] ) )
	}

	const getRoutesWithSchema = () => {
		return getRoutes().filter( route => route.schema )
	}

	const getSchemaTypes = () => {
		return uniqueArray( getRoutesWithSchema().map( route => route.schema.title ) )
	}

	const getRoutesGroupedBySchemaType = () => {
		return getSchemaTypes().map( ( schemaType ) => {
			let schema = {
				type: schemaType,
				routes: getRoutesWithSchema().filter( route => schemaType === route.schema.title )
			}

			return schema
		} )
	}

	return {
		name,
		data,
		getRouteNames,
		getRoutes,
		getSchemaTypes,
		getRoutesGroupedBySchemaType
	}
}

export default Reference
