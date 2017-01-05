/**
 * External dependecies.
 */
import React from 'react'

const ResourcesMenu = ( { resources } ) => (
	<div>
		<h1>Resources List</h1>
		{ resources.map( resource => <div key={ resource }>{ resource }</div> ) }
	</div>
)

export default ResourcesMenu
