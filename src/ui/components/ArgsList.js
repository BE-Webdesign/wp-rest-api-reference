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
		<div className="args-list">
			<h2 className="args-list__title">Args:</h2>
			<ul className="args-list__list">
				{ args.map( ( arg ) => <ReferenceArg arg={ arg } key={ arg.name } /> ) }
			</ul>
		</div>
	)
}

export default ArgsList
