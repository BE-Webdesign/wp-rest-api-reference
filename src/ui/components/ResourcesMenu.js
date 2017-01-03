/**
 * External dependecies.
 */
import React from 'react'

const ResourcesMenu = ( { resources } ) => (
	<div>
		<h1></h1>
		{ resources.map( resource => <div>{ resource }</div> ) }
	</div>
)

export default ResourcesMenu
