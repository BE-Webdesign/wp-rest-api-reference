'use-strict'

/**
 * External dependecies.
 */
import test from 'tape'

/**
 * Internal dependecies.
 */
import { uniqueArray } from '../../src/app/utilities'

test( 'uniqueArray', ( assert ) => {
	let array = [ 0, 0, 0, 1, 1, 2, 3, 3, 3 ]

	let expected = [ 0, 1, 2, 3 ]
	let actual = uniqueArray( array )

	assert.deepEqual( actual, expected, 'The list of schema types should match.' )

	assert.end()
} )
