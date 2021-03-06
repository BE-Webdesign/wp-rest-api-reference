/**
 * The ReferencePresenter builds a view model of the reference.
 */

/**
 * External dependecies
 */
import _ from 'lodash'

/**
 * Internal dependecies
 */
import { uniqueArray } from '../../app/utilities'

const ReferencePresenter = ( reference ) => {
	const getEndpointType = ( endpoint ) => {
		const types = [
			{
				type: 'readable',
				methods: ['GET']
			},
			{
				type: 'createable',
				methods: ['POST']
			},
			{
				type: 'updateable',
				methods: ['POST', 'PUT', 'PATCH']
			},
			{
				type: 'deleteable',
				methods: ['DELETE']
			}
		]

		return types.find( type => _.isEqual( type.methods, endpoint.methods ) ).type
	}

	const getArgs = ( args ) => {
		return Object.keys( args ).map( name => Object.assign( {}, { name }, args[ name ] ) )
	}

	const buildEndpoint = ( endpoint ) => {
		const fields = {
			args: getArgs( endpoint.args ),
			type: getEndpointType( endpoint )
		}

		return Object.assign( {}, endpoint, fields )
	}

	const buildRoute = ( route ) => {
		const fields = {
			endpoints: route.endpoints.map( buildEndpoint )
		}

		return Object.assign( {}, route, fields )
	}

	const buildRoutes = routes => routes.map( buildRoute )

	const buildSchemaProperties = schemaProperties => Object.keys( schemaProperties ).map( name => Object.assign( {}, { name }, schemaProperties[ name ] ) )

	const buildSchema = schema => Object.assign( {}, schema, { properties: buildSchemaProperties( schema.properties ) } )

	const getRoutes = () => buildRoutes( reference.getRoutes() )

	const getRoutesWithSchema = () => {
		return getRoutes().filter( route => route.schema )
	}

	const getRoutesWithoutSchema = () => {
		return getRoutes().filter( route => undefined === route.schema )
	}

	const getSchemaTypes = () => uniqueArray( getRoutesWithSchema().map( route => route.schema.title ) )

	const findMatchingSchemaData = schemaType => getRoutesWithSchema().find( route => schemaType === route.schema.title ).schema

	const getRoutesGroupedBySchemaType = () => {
		let routesWithSchema = getSchemaTypes().map( ( schemaType ) => {
			let schema = {
				type: schemaType,
				routes: getRoutesWithSchema().filter( route => schemaType === route.schema.title ),
				schema: buildSchema( findMatchingSchemaData( schemaType ) )
			}

			return schema
		} )

		let routesWithoutSchema = {
			type: 'none',
			routes: getRoutesWithoutSchema(),
			schema: {
				properties: []
			}
		}

		// Create a new list out of both of these lists of routes.
		return [ ...routesWithSchema, routesWithoutSchema ]
	}

	const buildViewModel = () => {
		return {
			name: reference.name,
			data: reference.data,
			routes: getRoutes(),
			schemaTypes: getSchemaTypes(),
			routesGroupedBySchema: getRoutesGroupedBySchemaType(),
		}
	}

	const present = () => {
		return buildViewModel()
	}

	return {
		present
	}
}

export default ReferencePresenter
