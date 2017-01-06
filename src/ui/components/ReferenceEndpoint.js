/**
 * External dependecies.
 */
import React from 'react'

/**
 * Internal dependecies.
 */
import ArgsList from './ArgsList'

const ReferenceEndpoint = ( { endpoint } ) => (
	<div className="reference-endpoint">
		<ul className="reference-endpoint__menu">
			{ endpoint.methods.map( ( method, index ) => <li className="reference-endpoint__item" key={ index }>{ method }</li> ) }
		</ul>
		<ArgsList args={ endpoint.args } />
	</div>
)

export default ReferenceEndpoint
