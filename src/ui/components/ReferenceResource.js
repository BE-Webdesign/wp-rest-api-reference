/**
 * External dependecies.
 */
import React from 'react'

/**
 * Internal dependecies.
 */
import RoutesList from './RoutesList'
import ResourceSchema from './ResourceSchema'

const ReferenceResource = ( { resource } ) => (
	<div className="reference-resource">
		<h1 className="reference-resource__title">{ resource.type }</h1>
		<ResourceSchema schema={ resource.schema } />
		<RoutesList routes={ resource.routes } />
	</div>
)

export default ReferenceResource
