'use-strict'

/**
 * External dependecies.
 */
import test from 'tape'

/**
 * Internal dependecies.
 */
import { FETCH_CURRENT_USER_REQUEST, FETCH_CURRENT_USER_REQUEST_SUCCESS, FETCH_CURRENT_USER_REQUEST_FAILURE } from '../../../src/ui/actions/actions'

test( 'FETCH_CURRENT_USER_REQUEST', ( assert ) => {
	let expected = 'FETCH_CURRENT_USER_REQUEST'
	let actual = FETCH_CURRENT_USER_REQUEST

	assert.equal( actual, expected, 'Action constant should match.' )

	assert.end()
} )

test( 'FETCH_CURRENT_USER_REQUEST_SUCCESS', ( assert ) => {
	let expected = 'FETCH_CURRENT_USER_REQUEST_SUCCESS'
	let actual = FETCH_CURRENT_USER_REQUEST_SUCCESS

	assert.equal( actual, expected, 'Action constant should match.' )

	assert.end()
} )

test( 'FETCH_CURRENT_USER_REQUEST_FAILURE', ( assert ) => {
	let expected = 'FETCH_CURRENT_USER_REQUEST_FAILURE'
	let actual = FETCH_CURRENT_USER_REQUEST_FAILURE

	assert.equal( actual, expected, 'Action constant should match.' )

	assert.end()
} )
