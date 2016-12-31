/**
 * External dependecies.
 */
import React from 'react'

/**
 * Internal dependecies.
 */
import ReferenceRoute from './ReferenceRoute'

const ReferenceView = ( { reference } ) => (
	<div>
		<h1>WP REST API Reference!</h1>
		<div>
		{ reference.routes.map( route => <ReferenceRoute {...route} key={ route.routeName } /> ) }
		</div>
	</div>
)

export default ReferenceView
