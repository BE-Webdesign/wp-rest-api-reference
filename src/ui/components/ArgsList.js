/**
 * External dependecies.
 */
import React from 'react'

/**
 * Internal dependecies.
 */
import ReferenceArg from './ReferenceArg'

const ArgsList = ( { args } ) => {
	return (
		<div>
			<h2>Args:</h2>
			<ul>
				{ args.map( ( arg ) => <ReferenceArg arg={ arg } key={ arg.name } /> ) }
			</ul>
		</div>
	)
}

export default ArgsList
