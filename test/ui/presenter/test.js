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
