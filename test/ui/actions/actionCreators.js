'use-strict'

/**
 * External dependecies.
 */
import test from 'tape'
import sampleCurrentUser from '../../../src/sampleData/sampleCurrentUser.js'

/**
 * Internal dependecies.
 */
import { fetchCurrentUserRequest, fetchCurrentUserRequestSuccess, fetchCurrentUserRequestFailure } from '../../../src/ui/actions/actionCreators'

test( 'fetchCurrentUserRequest', ( assert ) => {
	let expected = {
		type: 'FETCH_CURRENT_USER_REQUEST',
		currentUser: sampleCurrentUser
	}
	let actual = fetchCurrentUserRequest( sampleCurrentUser );

	assert.deepEqual( actual, expected, 'The action creator should match the expected data.' )

	assert.end()
} )

test( 'fetchCurrentUserRequestSuccess', ( assert ) => {
	let responseData = sampleCurrentUser

	let expected = {
		type: 'FETCH_CURRENT_USER_REQUEST_SUCCESS',
		currentUser: sampleCurrentUser,
		responseData: responseData
	}
	let actual = fetchCurrentUserRequestSuccess( sampleCurrentUser, responseData );

	assert.deepEqual( actual, expected, 'The action creator for current user request success should match the expected data.' )

	assert.end()
} )

test( 'fetchCurrentUserRequestFailure', ( assert ) => {
	let responseError = {
		code: 'rest_not_logged_in',
		message: 'You are not currently logged in.',
		data: {
			status: 401
		}
	}

	let expected = {
		type: 'FETCH_CURRENT_USER_REQUEST_FAILURE',
		currentUser: sampleCurrentUser,
		responseError: responseError
	}
	let actual = fetchCurrentUserRequestFailure( sampleCurrentUser, responseError );

	assert.deepEqual( actual, expected, 'The action creator for current user request success should match the expected data.' )

	assert.end()
} )
