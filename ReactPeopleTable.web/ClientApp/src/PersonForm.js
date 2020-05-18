import React from 'react'

class PersonForm extends React.Component {
    render() {
        const { onFirstNameChange, onLastNameChange, onAgeChange, AddPerson, person ,newPerson, onEditPersonClick} = this.props
        return (
            <div>
                <div className="well" style={{ marginTop: 45 }}>
                    <div className="row">
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="First Name" onChange={onFirstNameChange} name='firstName' value={person.firstName} required/>
                        </div>
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="Last Name" onChange={onLastNameChange} name='lastName' value={person.lastName} required/>
                        </div>
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="Age" onChange={onAgeChange} name='age' value={person.age} required/>
                        </div>
                        <div className="col-md-3">
                            {newPerson && <button className="btn btn-success" onClick={AddPerson}>Add Person</button>}
                            {!newPerson && <button className="btn btn-primary" onClick={onEditPersonClick} >Edit Person</button>}
                        </div>
                </div>
            </div>
            </div >
        )
    }
}

export default PersonForm