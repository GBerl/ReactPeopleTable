import React from 'react'

class PersonRow extends React.Component {
    render() {
        const { firstName, lastName, age} = this.props.person
        const { EditPerson, DeletePerson, onCheckClick} = this.props
        return (

            <tr>
                <td><input type='checkbox' onChange={onCheckClick} /></td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{age}</td>
                <td>
                    <div className='col-md-1'>
                        <button className="btn btn-primary" onClick={EditPerson}>Edit</button>
                    </div>
                    <div className='col-md-2 col-md-offset-1'>
                        <button className="btn btn-danger" onClick={DeletePerson}>Delete</button>
                    </div>
                </td>
            </tr>

        )
    }
}

export default PersonRow