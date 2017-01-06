/**
 * External dependecies.
 */
import React from 'react'

/**
 * Internal dependecies.
 */
import RoutesList from './RoutesList'

const ReferenceResource = ( { resource } ) => (
	<div className="reference-resource">
		<h1 className="reference-resource__title">{ resource.type }</h1>
		<RoutesList routes={ resource.routes } />
	</div>
)

export default ReferenceResource
