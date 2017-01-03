/**
 * External dependecies.
 */
import React from 'react'

/**
 * Internal dependecies.
 */
import RoutesList from './RoutesList'

const ReferenceResource = ( { resource } ) => (
	<div>
		<h1>{ resource.type }</h1>
		<RoutesList routes={ resource.routes } />
	</div>
)

export default ReferenceResource
