/**
 * External dependecies.
 */
import React from 'react'

/**
 * Internal dependecies.
 */
import ReferenceRoute from './ReferenceRoute'

const RoutesList = ( { routes } ) => (
	<div className="routes-list">
		{ routes.map( route => <ReferenceRoute {...route} key={ route.routeName } /> ) }
	</div>
)

export default RoutesList
