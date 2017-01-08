/**
 * Internal dependencies.
 */
import { BOOTSTRAP_REFERENCE, FETCH_CURRENT_USER_REQUEST, FETCH_CURRENT_USER_REQUEST_SUCCESS, FETCH_CURRENT_USER_REQUEST_FAILURE } from './actions'

/*
 * action creators
 */
export function bootstrapReference( reference ) {
	return { type: BOOTSTRAP_REFERENCE, reference }
}

export function fetchCurrentUserRequest( currentUser ) {
	return { type: FETCH_CURRENT_USER_REQUEST, currentUser }
}

export function fetchCurrentUserRequestSuccess( currentUser, responseData ) {
	return {
		type: FETCH_CURRENT_USER_REQUEST_SUCCESS,
		currentUser,
		responseData
	}
}

export function fetchCurrentUserRequestFailure( currentUser, responseError ) {
	return {
		type: FETCH_CURRENT_USER_REQUEST_FAILURE,
		currentUser,
		responseError
	}
}
