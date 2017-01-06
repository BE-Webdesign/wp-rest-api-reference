/**
 * External dependecies.
 */
import React from 'react'

const ResourcesMenu = ( { resources } ) => (
	<div className="resources-menu">
		<h1 className="resources-menu__title">Resources List</h1>
		<ul className="resources-menu__menu">
			{ resources.map( resource => <li className="resources-menu__item" key={ resource }>{ resource }</li> ) }
		</ul>
	</div>
)

export default ResourcesMenu
