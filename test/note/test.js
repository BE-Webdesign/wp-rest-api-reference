'use-strict'

/**
 * External dependecies.
 */
import test from 'tape'

/**
 * Internal dependecies.
 */
import { Note, SchemaNote, RouteNote, ArgumentNote, EndpointNote, createRouteNote, createArgumentNote, createEndpointNote, createSchemaNote, createNote } from '../../src/app/note/'

test( 'Note', ( assert ) => {
	let note = Note( 'I am a message' )( 'schema' )

	let expected = {
		type: 'schema',
		message: 'I am a message'
	}
	let actual = note

	assert.deepEqual( actual, expected, 'The note fields should match.' )

	assert.end()
} )

test( 'SchemaNote', ( assert ) => {
	let note = SchemaNote( 'I am a message' )

	let expected = {
		type: 'schema',
		message: 'I am a message'
	}
	let actual = note

	assert.deepEqual( actual, expected, 'The note fields should match.' )

	assert.end()
} )

test( 'RouteNote', ( assert ) => {
	let note = RouteNote( 'I am a message' )

	let expected = {
		type: 'route',
		message: 'I am a message'
	}
	let actual = note

	assert.deepEqual( actual, expected, 'The note fields should match.' )

	assert.end()
} )

test( 'ArgumentNote', ( assert ) => {
	let note = ArgumentNote( 'I am a message' )

	let expected = {
		type: 'arg',
		message: 'I am a message'
	}
	let actual = note

	assert.deepEqual( actual, expected, 'The note fields should match.' )

	assert.end()
} )

test( 'EndpointNote', ( assert ) => {
	let note = EndpointNote( 'I am a message' )

	let expected = {
		type: 'endpoint',
		message: 'I am a message'
	}
	let actual = note

	assert.deepEqual( actual, expected, 'The note fields should match.' )

	assert.end()
} )

test( 'createNote', ( assert ) => {
	let noteArgs = {
		schema: 'post',
		field: 'date',
	}
	let note = createNote( SchemaNote( 'Only supports full ISO 8601 date strings.' ) )( noteArgs )

	let expected = {
		type: 'schema',
		schema: 'post',
		field: 'date',
		message: 'Only supports full ISO 8601 date strings.'
	}
	let actual = note

	assert.deepEqual( actual, expected, 'The additional field data should match.' )

	assert.end()
} )

test( 'createSchemaNote', ( assert ) => {
	let noteArgs = {
		schema: 'post',
		field: 'date',
	}
	let note = createSchemaNote( 'Only supports full ISO 8601 date strings.' )( noteArgs )

	let expected = {
		type: 'schema',
		schema: 'post',
		field: 'date',
		message: 'Only supports full ISO 8601 date strings.'
	}
	let actual = note

	assert.deepEqual( actual, expected, 'The additional field data should match.' )

	assert.end()
} )

test( 'createArgumentNote', ( assert ) => {
	let noteArgs = {
		route: 'wp/v2/posts',
		endpoint: 'GET',
		field: 'per_page',
	}
	let note = createArgumentNote( 'This argument has major performance issues.' )( noteArgs )

	let expected = {
		type: 'arg',
		route: 'wp/v2/posts',
		endpoint: 'GET',
		field: 'per_page',
		message: 'This argument has major performance issues.'
	}
	let actual = note

	assert.deepEqual( actual, expected, 'The additional field data should match.' )

	assert.end()
} )

test( 'createRouteNote', ( assert ) => {
	let noteArgs = {
		route: 'wp/v2/posts',
	}
	let note = createRouteNote( 'The posts route is a read only route.' )( noteArgs )

	let expected = {
		type: 'route',
		route: 'wp/v2/posts',
		message: 'The posts route is a read only route.'
	}
	let actual = note

	assert.deepEqual( actual, expected, 'The additional field data should match.' )

	assert.end()
} )

test( 'createEndpointNote', ( assert ) => {
	let noteArgs = {
		route: 'wp/v2/posts',
		endpoint: 'GET'
	}
	let note = createEndpointNote( 'The posts endpoint is useful for fetching information associated with posts.' )( noteArgs )

	let expected = {
		type: 'endpoint',
		route: 'wp/v2/posts',
		endpoint: 'GET',
		message: 'The posts endpoint is useful for fetching information associated with posts.'
	}
	let actual = note

	assert.deepEqual( actual, expected, 'The field data should match.' )

	assert.end()
} )
