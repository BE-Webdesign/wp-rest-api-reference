/**
 * The Note type is the internal entity used for additional information.
 *
 * Notes are created and stored separately, before the view model is built they
 * are merged into a single entity with the rest of the reference to create a
 * proper view model.
 */

// Base note type.
const Note = ( message ) => ( type ) => {
	return {
		message,
		type
	}
}

// Base note types.
const SchemaNote = ( message ) => Note( message )( 'schema' )
const ArgumentNote = ( message ) => Note( message )( 'arg' )
const RouteNote = ( message ) => Note( message )( 'route' )
const EndpointNote = ( message ) => Note( message )( 'endpoint' )

// General factoryish function.
const createNote = ( note ) => ( args ) => Object.assign( {}, note, args )

// Factories for specific types.
const createSchemaNote = ( message ) => ( args ) => createNote( SchemaNote( message ) )( args )
const createArgumentNote = ( message ) => ( args ) => createNote( ArgumentNote( message ) )( args )
const createRouteNote = ( message ) => ( args ) => createNote( RouteNote( message ) )( args )
const createEndpointNote = ( message ) => ( args ) => createNote( EndpointNote( message ) )( args )

export { Note, createSchemaNote, createArgumentNote, createRouteNote, createEndpointNote, SchemaNote, ArgumentNote, RouteNote, EndpointNote, createNote }
