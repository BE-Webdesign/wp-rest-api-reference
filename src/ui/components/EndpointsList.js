/**
 * External dependecies.
 */
import React from 'react'

/**
 * Internal dependecies.
 */
import ReferenceEndpoint from './ReferenceEndpoint'

const EndpointsList = ( { endpoints } ) => {
	return (
		<div>
			<h3>Endpoints:</h3>
			<ul>
				{ endpoints.map( ( endpoint, index ) => <ReferenceEndpoint endpoint={ endpoint } key={ index } /> ) }
			</ul>
		</div>
	)
}

export default EndpointsList
