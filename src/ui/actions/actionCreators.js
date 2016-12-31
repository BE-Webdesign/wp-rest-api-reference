/**
 * Internal dependencies.
 */
import { LOAD_POST, FETCH_POST } from './actions'

/*
 * action creators
 */
export function loadPost( post ) {
	return { type: LOAD_POST, post }
}

export function fetchPost( params ) {
	return { type: FETCH_POST, params }
}
