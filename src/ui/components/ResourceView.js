/**
 * External dependecies.
 */
import React from 'react'

/**
 * Internal dependecies.
 */
import ResourcesMenu from './ResourcesMenu'
import ReferenceResource from './ReferenceResource'

const ResourceView = ( { reference, params } ) => {
	console.log( 'CURRENT ROUTING:', params )
	console.log( 'Current REFERENCE', reference )
	let pathname = params.resourceName
	let resource = reference.routesGroupedBySchema.find( schema => schema.type === pathname )

	console.log( 'Matched Resource', resource )

	return (
		<div className="resource-view">
			<h1 className="reference-view__title">Welcome!</h1>
			<ResourcesMenu resources={ reference.schemaTypes } />
			<ReferenceResource resource={ resource } key={ resource.type } />
		</div>
	)
}

export default ResourceView
