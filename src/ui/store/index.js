/**
 * External dependencies
 */
import { createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

/**
 * Internal dependencies
 */
import rootReducer from '../reducers'

const store = createStore( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

export const history = syncHistoryWithStore( browserHistory, store )

export default store;
