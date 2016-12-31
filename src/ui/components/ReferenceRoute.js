/**
 * External dependecies.
 */
import React from 'react'

/**
 * Internal dependecies.
 */
import EndpointsList from './EndpointsList'

const ReferenceRoute = ( route ) => (
	<div>
		<h1>{ route.routeName }</h1>
		<EndpointsList endpoints={ route.endpoints } />
	</div>
)

export default ReferenceRoute
