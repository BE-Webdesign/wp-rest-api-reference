/**
 * External dependecies.
 */
import React from 'react'

/**
 * Internal dependecies.
 */
import ReferenceResource from './ReferenceResource'

const ResourceList = ( { resources } ) => (
	<div>
		{ resources.map( resource => <ReferenceResource resource={ resource } key={ resource.type } /> ) }
	</div>
)

export default ResourceList
