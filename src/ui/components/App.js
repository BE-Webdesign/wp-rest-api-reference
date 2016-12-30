/**
 * External dependencies.
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/**
 * Internal dependencies.
 */
import * as actionCreators from '../actions/actionCreators'
import Main from './Main'

const mapStateToProps = ( state ) => {
	return {
		posts: state.posts
	}
}

const mapDispatchToProps = ( dispatch ) => bindActionCreators( actionCreators, dispatch )

const App = connect( mapStateToProps, mapDispatchToProps )( Main )

export default App
