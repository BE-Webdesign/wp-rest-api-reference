'use-strict'

/**
 * External Dependencies.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

/**
 * Internal dependencies.
 */
import App from './ui/components/App'
import ReferenceView from './ui/components/ReferenceView'
import ResourceView from './ui/components/ResourceView'
import store, { history } from './ui/store'

const router = (
	<Router history={history}>
		<Route path="/rest-reference" component={ App }>
			<IndexRoute component={ ReferenceView }></IndexRoute>
			<Route path="/rest-reference/:resourceName" component={ ResourceView }/>
		</Route>
	</Router>
)

const provider = (
	<Provider store={store}>
		{router}
	</Provider>
)

render(
	provider,
	document.getElementById( 'wp-rest-api-reference' )
)
