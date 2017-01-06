/**
 * External dependencies.
 */
import React from 'react'

const Main = React.createClass( {
	render() {
		return (
			<div className="main">
				{ React.cloneElement( this.props.children, this.props ) }
			</div>
		)
	}
} )

export default Main
