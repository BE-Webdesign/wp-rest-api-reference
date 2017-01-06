<?php
/**
 * Template file for loading the reference into the context of a theme.
 *
 * @package WP_REST_API_Reference
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Hook in content wrappers.
add_action( 'wp_rest_api_reference_before_main_content', 'wp_rest_api_reference_content_wapper_start' );
add_action( 'wp_rest_api_reference_after_main_content', 'wp_rest_api_reference_content_wapper_end' );

/**
 * Hook: wp_rest_api_reference_before_main_content.
 *
 * @hooked wp_rest_api_reference_content_wapper_start - 10 (outputs opening divs for the content)
 */
do_action( 'wp_rest_api_reference_before_main_content' );

?>
<h1>WP REST API Reference</h1>
<div id="wp-rest-api-reference" class="wp-rest-api-reference"></div>
<?php

/**
 * Hook: wp_rest_api_reference_after_main_content.
 *
 * @hooked wp_rest_api_reference_content_wapper_end - 10 (outputs opening divs for the content)
 */
do_action( 'wp_rest_api_reference_after_main_content' );
