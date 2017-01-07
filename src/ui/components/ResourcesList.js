/**
 * External dependecies.
 */
import React from 'react'

/**
 * Internal dependecies.
 */
import ReferenceResource from './ReferenceResource'

const ResourcesList = ( { resources } ) => (
	<div className="resources-list">
		{ resources.map( resource => <ReferenceResource resource={ resource } key={ resource.type } /> ) }
	</div>
)

export default ResourcesList
