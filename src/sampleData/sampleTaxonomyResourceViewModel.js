/**
 * Internal dependencies.
 */
import sampleTaxonomyRouteViewModel from './sampleTaxonomyRouteViewModel'
import sampleTaxonomyRouteViewModel2 from './sampleTaxonomyRouteViewModel2'

const sampleTaxonomyResourceViewModel = {
	type: 'taxonomy',
	routes: [
		sampleTaxonomyRouteViewModel,
		sampleTaxonomyRouteViewModel2
	],
	schema: {
		$schema: 'http://json-schema.org/schema#',
		title: 'taxonomy',
		type: 'object',
		properties: [
			{
				name: "capabilities",
				"description": "All capabilities used by the taxonomy.",
				"type": "object",
				"context": [
					"edit"
				],
				"readonly": true
			},
			{
				name: "description",
				"description": "A human-readable description of the taxonomy.",
				"type": "string",
				"context": [
					"view",
					"edit"
				],
				"readonly": true
			},
			{
				name: "hierarchical",
				"description": "Whether or not the taxonomy should have children.",
				"type": "boolean",
				"context": [
					"view",
					"edit"
				],
				"readonly": true
			},
			{
				name: "labels",
				"description": "Human-readable labels for the taxonomy for various contexts.",
				"type": "object",
				"context": [
					"edit"
				],
				"readonly": true
			},
			{
				name: "name",
				"description": "The title for the taxonomy.",
				"type": "string",
				"context": [
					"view",
					"edit",
					"embed"
				],
				"readonly": true
			},
			{
				name: "slug",
				"description": "An alphanumeric identifier for the taxonomy.",
				"type": "string",
				"context": [
					"view",
					"edit",
					"embed"
				],
				"readonly": true
			},
			{
				name: "show_cloud",
				"description": "Whether or not the term cloud should be displayed.",
				"type": "boolean",
				"context": [
					"edit"
				],
				"readonly": true
			},
			{
				name: "types",
				"description": "Types associated with the taxonomy.",
				"type": "array",
				"items": {
					"type": "string"
				},
				"context": [
					"view",
					"edit"
				],
				"readonly": true
			},
			{
				name: "rest_base",
				"description": "REST base route for the taxonomy.",
				"type": "string",
				"context": [
					"view",
					"edit",
					"embed"
				],
				"readonly": true
			}
		]
	}
}

export default sampleTaxonomyResourceViewModel
