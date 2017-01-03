'use-strict'

/**
 * External dependecies.
 */
import test from 'tape'
import sampleReference from '../../../src/sampleData/sample.js'
import sampleTaxonomyRouteViewModel from '../../../src/sampleData/sampleTaxonomyRouteViewModel.js'

/**
 * Internal dependecies.
 */
import Reference from '../../../src/app/reference'
import ReferencePresenter from '../../../src/ui/presenter'

test( 'ReferencePresenter', ( assert ) => {
	const reference = Reference( 'Test Reference', sampleReference )
	const referencePresenter = ReferencePresenter( reference )
	const viewModel = referencePresenter.present()

	let expected = 'Test Reference'
	let actual = viewModel.name

	assert.deepEqual( actual, expected, 'The presenter view model name should match.' )

	expected = sampleTaxonomyRouteViewModel
	actual = viewModel.routes.find( route => '/wp/v2/taxonomies' === route.routeName )

	assert.deepEqual( actual, expected, 'The presenter view model should match.' )

	assert.end()
} )

test( 'ReferencePresenter', ( assert ) => {
	const reference = Reference( 'Test Reference', sampleReference )
	const referencePresenter = ReferencePresenter( reference )
	const viewModel = referencePresenter.present()

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
	let actual = viewModel.schemaTypes

	assert.deepEqual( actual, expected, 'The presenter view model schema types should match.' )

	expected = [
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
		'settings',
		'none'
	]
	actual = viewModel.routesGroupedBySchema.map( schema => schema.type )

	assert.deepEqual( actual, expected, 'The routes grouped by schema should match.' )

	assert.end()
} )
