'use-strict'

/**
 * External dependecies.
 */
import test from 'tape'
import sampleReference from '../sample.js'

test( 'Sample reference name works', ( assert ) => {
	const expected = 'WordPress Developer Environment'
	const actual = sampleReference.name;

	assert.equal( actual, expected, 'The reference name matched.' )

	assert.end()
} );
