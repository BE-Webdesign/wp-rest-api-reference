/**
 * External dependecies.
 */
import React from 'react'

/**
 * Internal dependecies.
 */
import ArgsList from './ArgsList'

const ReferenceEndpoint = ( { endpoint } ) => (
	<div>
		<ul>
			{ endpoint.methods.map( ( method, index ) => <li key={ index }>{ method }</li> ) }
		</ul>
		<ArgsList args={ endpoint.args } />
	</div>
)

export default ReferenceEndpoint
