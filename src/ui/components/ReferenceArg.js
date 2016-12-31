/**
 * External dependecies.
 */
import React from 'react'

const ReferenceArg = ( { arg } ) => {
	const getProperties = argument => Object.keys( argument )

	const renderProperty = ( propertyName, object ) => {
		// Skip the name property.
		if ( ! ( 'name' === propertyName ) ) {
			if ( object[ propertyName ] instanceof Object && ! ( object[ propertyName ] instanceof Array ) ) {
				return (
					<li key={ propertyName }>
						<h4>{ propertyName }:</h4>
						<ul>{ getProperties( object[ propertyName ] ).map( name => renderProperty( name, object[ propertyName ] ) ) }</ul>
					</li>
				)
			}

			if ( Array.isArray( object[ propertyName ] ) ) {
				return (
					<li key={ propertyName }>
						<h4>{ propertyName }:</h4>
						<ul>
						{ object[ propertyName ].map( ( aproperty ) => {
							return ( <li key={ aproperty }>{ aproperty }</li> )
						} ) }
						</ul>
					</li>
				)
			}

			return (
				<li key={ propertyName }>
					<h4>{ propertyName }</h4>
					<p>{ object[ propertyName ] }</p>
				</li>
			)
		}
	}

	return (
		<div>
			<h3>{ arg.name }</h3>
			<ul>
				{ getProperties( arg ).map( propertyName => renderProperty( propertyName, arg ) ) }
			</ul>
		</div>
	)
}

export default ReferenceArg
