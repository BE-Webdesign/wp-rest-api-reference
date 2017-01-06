/**
 * External dependecies.
 */
import React from 'react'

/**
 * Internal dependecies.
 */
import ResourcesMenu from './ResourcesMenu'
import ResourcesList from './ResourcesList'

const ReferenceView = ( { reference } ) => (
	<div className="reference-view">
		<h1 className="reference-view__title">Welcome!</h1>
		<ResourcesMenu resources={ reference.schemaTypes } />
		<ResourcesList resources={ reference.routesGroupedBySchema } />
	</div>
)

export default ReferenceView
