'use-strict'

/**
 * External dependecies.
 */
import test from 'tape'
import sampleReference from '../sample.js'
import buildReference from '../src/index.js'

test( 'sampleReference', ( assert ) => {
	let expected = undefined
	let actual = typeof sampleReference;

	assert.notEqual( actual, expected, 'The reference should be defined.' )

	assert.end()
} )

test( 'buildReference.name', ( assert ) => {
	let reference = buildReference( 'Sample Reference', sampleReference )

	let expected = 'Sample Reference'
	let actual = reference.name

	assert.equal( actual, expected, 'The reference name should match.' )

	assert.end()
} )

test( 'buildReference.data', ( assert ) => {
	let reference = buildReference( 'Sample Reference', sampleReference )

	let expected = reference.data
	let actual = sampleReference

	assert.equal( actual, expected, 'The reference data should match.' )

	assert.end()
} )
