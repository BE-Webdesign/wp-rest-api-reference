/**
 * External Dependencies.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

/**
 * Internal Depencies.
 */
import reference from './reference'

const rootReducer = combineReducers( { reference, routing: routerReducer } )

export default rootReducer
