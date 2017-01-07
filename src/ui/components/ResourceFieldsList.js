/**
 * External dependecies.
 */
import React from 'react'

/**
 * Internal dependecies.
 */
import ReferenceArg from './ReferenceArg'

const ResourceFieldsList = ( { fields } ) => {
	return (
		<div className="resource-fields-list">
			<h2 className="resource-fields-list__title">Fields:</h2>
			<ul className="resource-fields-list__list">
				{ fields.map( ( arg ) => <ReferenceArg arg={ arg } key={ arg.name } /> ) }
			</ul>
		</div>
	)
}

export default ResourceFieldsList
