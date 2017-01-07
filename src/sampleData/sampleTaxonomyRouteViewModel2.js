const sampleTaxonomyRouteViewModel2 = {
	routeName: '/wp/v2/taxonomies/(?P<taxonomy>[\\w-]+)',
	namespace: 'wp/v2',
	methods: [
		'GET'
	],
	endpoints: [
		{
			methods: [
				'GET'
			],
			args: [
				{
					name: 'context',
					required: false,
					'default': 'view',
					'enum': [
						'view',
						'embed',
						'edit'
					],
					description: 'Scope under which the request is made; determines fields present in response.',
					type: 'string'
				}
			],
			type: 'readable'
		}
	],
	schema: {
		$schema: 'http://json-schema.org/schema#',
		title: 'taxonomy',
		type: 'object',
		properties: {
			capabilities: {
				description: 'All capabilities used by the taxonomy.',
				type: 'object',
				context: [
					'edit'
				],
				readonly: true
			},
			description: {
				description: 'A human-readable description of the taxonomy.',
				type: 'string',
				context: [
					'view',
					'edit'
				],
				readonly: true
			},
			hierarchical: {
				description: 'Whether or not the taxonomy should have children.',
				type: 'boolean',
				context: [
					'view',
					'edit'
				],
				readonly: true
			},
			labels: {
				description: 'Human-readable labels for the taxonomy for various contexts.',
				type: 'object',
				context: [
					'edit'
				],
				readonly: true
			},
			name: {
				description: 'The title for the taxonomy.',
				type: 'string',
				context: [
					'view',
					'edit',
					'embed'
				],
				readonly: true
			},
			slug: {
				description: 'An alphanumeric identifier for the taxonomy.',
				type: 'string',
				context: [
					'view',
					'edit',
					'embed'
				],
				readonly: true
			},
			show_cloud: {
				description: 'Whether or not the term cloud should be displayed.',
				type: 'boolean',
				context: [
					'edit'
				],
				readonly: true
			},
			types: {
				description: 'Types associated with the taxonomy.',
				type: 'array',
				items: {
					type: 'string'
				},
				context: [
					'view',
					'edit'
				],
				readonly: true
			},
			rest_base: {
				description: 'REST base route for the taxonomy.',
				type: 'string',
				context: [
					'view',
					'edit',
					'embed'
				],
				readonly: true
			}
		}
	}
}

export default sampleTaxonomyRouteViewModel2
