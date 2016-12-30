'use-strict'

/**
 * External dependecies.
 */
import test from 'tape'
import sampleReference from '../../src/sampleData/sample.js'
import sampleTaxonomyRoutes from '../../src/sampleData/sampleTaxonomyRoutes.js'

/**
 * Internal dependecies.
 */
import Reference from '../../src/app/reference'

test( 'sampleReference', ( assert ) => {
	let expected = undefined
	let actual = typeof sampleReference;

	assert.notEqual( actual, expected, 'The reference should be defined.' )

	assert.end()
} )

test( 'Reference.name', ( assert ) => {
	let reference = Reference( 'Sample Reference', sampleReference )

	let expected = 'Sample Reference'
	let actual = reference.name

	assert.equal( actual, expected, 'The reference name should match.' )

	assert.end()
} )

test( 'Reference.data', ( assert ) => {
	let reference = Reference( 'Sample Reference', sampleReference )

	let expected = reference.data
	let actual = sampleReference

	assert.equal( actual, expected, 'The reference data should match.' )

	assert.end()
} )

test( 'Reference.getRouteNames()', ( assert ) => {
	let reference = Reference( 'Sample Reference', sampleReference )
	let routes = reference.getRouteNames()

	let expected = [
		'/',
		'/oembed/1.0',
		'/oembed/1.0/embed',
		'/wp/v2',
		'/wp/v2/posts',
		'/wp/v2/posts/(?P<id>[\\d]+)',
		'/wp/v2/posts/(?P<parent>[\\d]+)/revisions',
		'/wp/v2/posts/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)',
		'/wp/v2/pages',
		'/wp/v2/pages/(?P<id>[\\d]+)',
		'/wp/v2/pages/(?P<parent>[\\d]+)/revisions',
		'/wp/v2/pages/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)',
		'/wp/v2/media',
		'/wp/v2/media/(?P<id>[\\d]+)',
		'/wp/v2/types',
		'/wp/v2/types/(?P<type>[\\w-]+)',
		'/wp/v2/statuses',
		'/wp/v2/statuses/(?P<status>[\\w-]+)',
		'/wp/v2/taxonomies',
		'/wp/v2/taxonomies/(?P<taxonomy>[\\w-]+)',
		'/wp/v2/categories',
		'/wp/v2/categories/(?P<id>[\\d]+)',
		'/wp/v2/tags',
		'/wp/v2/tags/(?P<id>[\\d]+)',
		'/wp/v2/users',
		'/wp/v2/users/(?P<id>[\\d]+)',
		'/wp/v2/users/me',
		'/wp/v2/comments',
		'/wp/v2/comments/(?P<id>[\\d]+)',
		'/wp/v2/settings'
	]
	let actual = routes

	assert.deepEqual( actual, expected, 'The routes should match.' )

	assert.end()
} )

test( 'Reference.getRoutes()', ( assert ) => {
	let reference = Reference( 'Sample Reference', sampleReference )
	let routes = reference.getRoutes()

	// Only test that one of the reference keys matches.
	let expected = {
		namespace: '',
		methods: [
			'GET'
		],
		endpoints: [
			{
				methods: [
					'GET'
				],
				args: {
					context: {
						required: false,
						default: 'view'
					}
				}
			}
		],
		_links: {
			self: 'http://local.graphql.dev/wp-json/'
		},
		routeName: '/'
	}
	let actual = routes.find( route => '/' === route.routeName )

	assert.deepEqual( actual, expected, 'The routes should match.' )

	assert.end()
} )

test( 'Reference.getSchemaTypes()', ( assert ) => {
	let reference = Reference( 'Sample Reference', sampleReference )
	let schemaTypes = reference.getSchemaTypes()

	let expected = [
		'post',
		'post-revision',
		'page',
		'page-revision',
		'attachment',
		'type',
		'status',
		'taxonomy',
		'category',
		'tag',
		'user',
		'comment',
		'settings'
	]
	let actual = schemaTypes

	assert.deepEqual( actual, expected, 'The list of schema types should match.' )

	assert.end()
} )

test( 'Reference.getRoutesGroupedBySchemaType()', ( assert ) => {
	let reference = Reference( 'Sample Reference', sampleReference )
	let routesBySchema = reference.getRoutesGroupedBySchemaType()

	let expected = sampleTaxonomyRoutes

	// Check that the taxonomy schema routes match the sample data.
	let actual = routesBySchema.find( routes => 'taxonomy' === routes.type )

	assert.deepEqual( actual, expected, 'The list of schema types should match.' )

	assert.end()
} )
