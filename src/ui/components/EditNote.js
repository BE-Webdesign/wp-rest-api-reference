/**
 * External dependecies.
 */
import React from 'react'

const EditNote = ( { field } ) => {
	return (
		<div className="edit-note">
			<textarea className="edit-note__input" type="text" placeholder={ `Edit notes for ${ field.name }`}></textarea>
			<input type="submit" value="Update Notes" />
		</div>
	)
}

export default EditNote
