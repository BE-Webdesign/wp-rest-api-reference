/**
 * External dependecies.
 */
import React from 'react'

/**
 * Internal dependecies.
 */
import EndpointsList from './EndpointsList'

const ReferenceRoute = ( route ) => (
	<div className="reference-route">
		<h2 className="reference-route__title">Route: { route.routeName }</h2>
		<EndpointsList endpoints={ route.endpoints } />
	</div>
)

export default ReferenceRoute
