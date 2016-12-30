'use-strict'

/**
 * External dependecies.
 */
import test from 'tape'

/**
 * Internal dependecies.
 */
import Notes from '../../src/app/notes/'
import { createSchemaNote, createRouteNote } from '../../src/app/note'

test( 'Notes.collection', ( assert ) => {
	const aNote = createSchemaNote( 'I am a message' )( { schema: 'post', field: 'date' } )
	const anotherNote = createSchemaNote( 'I am another message' )( { schema: 'comment', field: 'author' } )

	const notes = Notes( [ aNote, anotherNote ] )

	const expected = [
		{
			type: 'schema',
			schema: 'post',
			field: 'date',
			message: 'I am a message'
		},
		{
			type: 'schema',
			schema: 'comment',
			field: 'author',
			message: 'I am another message'
		}
	]
	const actual = notes.collection

	assert.deepEqual( actual, expected, 'The note fields should match.' )

	assert.end()
} )

test( 'Notes.groupByType()', ( assert ) => {
	const aNote = createSchemaNote( 'I am a message' )( { schema: 'post', field: 'date' } )
	const anotherNote = createSchemaNote( 'I am another message' )( { schema: 'comment', field: 'author' } )
	const routeNote = createRouteNote( 'I am a message' )( { route: 'wp/v2/posts' } )

	const notes = Notes( [ aNote, anotherNote, routeNote ] )

	const expected = {
		schema: [
			{
				type: 'schema',
				schema: 'post',
				field: 'date',
				message: 'I am a message'
			},
			{
				type: 'schema',
				schema: 'comment',
				field: 'author',
				message: 'I am another message'
			}
		],
		route: [
			{
				type: 'route',
				route: 'wp/v2/posts',
				message: 'I am a message'
			}
		]
	}
	const actual = notes.groupByType()

	assert.deepEqual( actual, expected, 'The notes should be grouped by type.' )

	assert.end()
} )
