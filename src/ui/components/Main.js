/**
 * External dependencies.
 */
import React from 'react'

const Main = React.createClass( {
	render() {
		return (
			<div>
				<h1>
					Main
				</h1>
				{ React.cloneElement( this.props.children, this.props ) }
			</div>
		)
	}
} )

export default Main
