/**
 * External dependecies.
 */
import React from 'react'

const ReferenceArg = ( { arg } ) => {
	const renderValue = ( value ) => {
		if ( value.length === 0 ) {
			return 'Empty Value'
		}

		return value
	}

	const renderArray = ( array ) => {
		if ( 0 === array.length ) {
			return ( <p>[] (empty array)</p> )
		}

		return array.map( ( value ) => {
			return ( <li key={ value }>{ renderValue( String( value ) ) }</li> )
		} )
	}

	const getProperties = argument => Object.keys( argument )

	const renderProperty = ( propertyName, object ) => {
		// Skip the name property.
		if ( ! ( 'name' === propertyName ) ) {
			if ( object[ propertyName ] instanceof Object && ! ( object[ propertyName ] instanceof Array ) ) {
				return (
					<li className="property" key={ propertyName }>
						<h4 className="property-name">{ propertyName }:</h4>
						<ul className="propertiy__list">{ getProperties( object[ propertyName ] ).map( name => renderProperty( name, object[ propertyName ] ) ) }</ul>
					</li>
				)
			}

			if ( Array.isArray( object[ propertyName ] ) ) {
				return (
					<li className="property" key={ propertyName }>
						<h4 className="property-name" >{ propertyName }:</h4>
						<ul className="property__list">
						{ renderArray( object[ propertyName ] ) }
						</ul>
					</li>
				)
			}

			return (
				<li className="property" key={ propertyName }>
					<h4 className="property__name">{ propertyName }</h4>
					<p className="property__value">{ renderValue( String( object[ propertyName ] ) ) }</p>
				</li>
			)
		}
	}

	return (
		<div>
			<h3 className="reference-arg">{ arg.name }</h3>
			<ul className="reference-arg__list">
				{ getProperties( arg ).map( propertyName => renderProperty( propertyName, arg ) ) }
			</ul>
		</div>
	)
}

export default ReferenceArg
