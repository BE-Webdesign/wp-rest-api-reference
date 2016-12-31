/**
 * The ReferencePresenter builds a view model of the reference.
 */

/**
 * External dependecies
 */
import _ from 'lodash'

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

	const buildViewModel = () => {
		return {
			name: reference.name,
			data: reference.data,
			routes: buildRoutes( reference.getRoutes() )
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
