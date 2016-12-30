/**
 * The ReferencePresenter builds a view model of the reference.
 */

const ReferencePresenter = ( reference ) => {
	const buildViewModel = () => {
		return reference.data
	}

	const present = () => {
		return buildViewModel()
	}

	return {
		present
	}
}

export default ReferencePresenter
