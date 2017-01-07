/**
 * External dependecies.
 */
import React from 'react'

/**
 * External dependecies.
 */
import ResourceFieldsList from './ResourceFieldsList'

const ReferenceResource = ( { schema } ) => (
	<div className="reference-resource">
		<h2 className="reference-resource__title">Schema</h2>
		<ResourceFieldsList fields={ schema.properties }/>
	</div>
)

export default ReferenceResource
