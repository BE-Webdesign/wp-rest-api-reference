<?php
/**
 * Plugin Name:     WP REST API Reference Manager
 * Plugin URI:      N/A
 * Description:     A tool for exposing the WP REST API reference. Enables the management of additional notes, along with versioning.
 * Author:          BE Forever - Edwin Cromley
 * Author URI:      N/A
 * Text Domain:     wp-rest-api-reference
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         WP_REST_API_Reference
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! defined( 'WP_REST_API_REFERENCE_MANAGER_PATH' ) ) {
	define( 'WP_REST_API_REFERENCE_MANAGER_PATH', plugin_dir_path( __FILE__ ) );
}

if ( ! defined( 'WP_REST_API_REFERENCE_MANAGER_URL' ) ) {
	define( 'WP_REST_API_REFERENCE_MANAGER_URL', plugin_dir_url( __FILE__ ) );
}

register_activation_hook( __FILE__, '\wp_rest_reference_activation_check' );
add_action( 'init',          'wp_rest_reference_init' );
add_action( 'parse_request', 'wp_rest_reference_loaded' );
add_filter( 'template_include', 'wp_rest_reference_load_template' );

/**
 * Registers rewrite rules for the API.
 *
 * @since 4.4.0
 *
 * @see wp_rest_reference_register_rewrites()
 * @global WP $wp Current WordPress environment instance.
 */
function wp_rest_reference_init() {
	wp_rest_reference_register_rewrites();

	global $wp;
	$wp->add_query_var( 'rest_reference_path' );
}

/**
 * Adds REST rewrite rules.
 *
 * @since 4.4.0
 *
 * @see add_rewrite_rule()
 */
function wp_rest_reference_register_rewrites() {
	add_rewrite_rule( '^' . get_rest_reference_url_path() . '/?$', 'index.php?rest_reference_path=/', 'top' );
}

/**
 * Fires when a request is parsed by WordPress and matches the WP REST API Reference endpoint.
 *
 * @global WP $wp Current WordPress environment instance.
 */
function wp_rest_reference_loaded() {
	if ( empty( $GLOBALS['wp']->query_vars['rest_reference_path'] ) ) {
		return;
	}

	add_action( 'wp_enqueue_scripts', 'wp_rest_reference_enqueue' );
	add_action( 'wp_head', 'wp_rest_reference_bootstrap_js' );
}

/**
 * Override template for the WP REST API reference.
 *
 * @param string|array $template Template file to load.
 */
function wp_rest_reference_load_template( $template ) {
	// If the reference is not set load the normal template.
	if ( empty( $GLOBALS['wp']->query_vars['rest_reference_path'] ) ) {
		return $template;
	}

	$template = WP_REST_API_REFERENCE_MANAGER_PATH . '/reference-template.php';
	return $template;
}

/**
 * The default content wrapper starting.
 */
function wp_rest_api_reference_content_wapper_start() {
	// Load header.
	wp_head();
	get_header();

	?>
	<div class="wrap">
		<div id="primary" class="content-area">
			<main id="main" class="site-main" role="main">
	<?php
}

/**
 * The default content wrapper ending.
 */
function wp_rest_api_reference_content_wapper_end() {
	get_footer();
	get_sidebar();
	wp_footer();

	?>
			</main><!-- #main -->
		</div><!-- #primary -->
	</div>
	<?php
}

/**
 * Bootstrap session storage.
 */
function wp_rest_reference_bootstrap_js() {
	/**
	 * Serve request and echo response.
	 */
	$request  = new WP_REST_Request( 'GET', '/' );
	$request->set_param( 'context', 'help' );
	$response = rest_do_request( $request );
	$json = wp_json_encode( $response->get_data() );

	// Store the reference as a string in sessionStorage.
	$output = sprintf( "<script>if ( sessionStorage ) { sessionStorage.setItem( 'referenceData', JSON.stringify( %s ) ); }</script>", $json );

	// If somehow the WP REST API schema is hijacked this is a minor loophole but the other implications would be alot larger.
	// @codingStandardsIgnoreStart
	echo $output;
	// @codingStandardsIgnoreEnd
}

/**
 * Enqueue the reference JS.
 */
function wp_rest_reference_enqueue() {
	wp_register_script( 'wp-rest-reference', WP_REST_API_REFERENCE_MANAGER_URL . '/dist/app.bundle.js', array(), null, true );
	wp_enqueue_script( 'wp-rest-reference' );
}

/**
 * Retrieves the URL path for the WP REST API Reference endpoint.
 *
 * @return string Prefix.
 */
function get_rest_reference_url_path() {
	/**
	 * Makes the WP REST API Reference endpoint changeable.
	 *
	 * @param string $path Pathname for rest reference. DO NOT use leading slash.
	 */
	return apply_filters( 'rest_reference_url', 'rest-reference' );
}

/**
 * Checks to see if the WordPress install is 4.7 or higher.
 */
function wp_rest_reference_activation_check() {
	if ( ! wp_rest_reference_is_compatible() ) {
		deactivate_plugins( plugin_basename( __FILE__ ) );
		wp_die( esc_html__( 'WP REST API Reference requires WordPress 4.7 or higher!', 'wp-rest-reference' ) );
	}

	flush_rewrite_rules();
}

/**
 * Echos an error notification.
 */
function wp_rest_reference_disabled_wp_notice() {
	echo '<div class="error"><p>', esc_html__( 'WP REST API Reference requires WordPress 4.7 or higher!', 'wp-graphql' ), '</p></div>';
}

/**
 * Checks whether the current WP Version is compatible.
 *
 * @return boolean True if compatible false if not.
 */
function wp_rest_reference_is_compatible() {
	if ( version_compare( $GLOBALS['wp_version'], '4.7', '<' ) ) {
		return false;
	}

	return true;
}
