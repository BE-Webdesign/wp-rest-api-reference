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
		<h2>Route: { route.routeName }</h2>
		<EndpointsList endpoints={ route.endpoints } />
	</div>
)

export default ReferenceRoute
