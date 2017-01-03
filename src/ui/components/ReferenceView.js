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
	<div>
		<h1>WP REST API Reference!</h1>
		<ResourcesMenu resources={ reference.schemaTypes } />
		<ResourcesList resources={ reference.routesGroupedBySchema } />
	</div>
)

export default ReferenceView
