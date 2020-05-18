import React from 'react'
import axios from 'axios'
import PersonRow from './PersonRow'
import PersonForm from './PersonForm'

class PeopleTable extends React.Component {
    state = {
        people: [],
        deleteList: [],
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }
    getAllPeople = () => {
        axios.get('api/people/getallpeople').then(allpeople => {
            const people = allpeople.data
            this.setState({ people, person: { firstName: '', lastName: '', age: '' } })
        })
    }
    componentDidMount = () => {
        this.getAllPeople()
    }

    addPerson = () => {
        axios.post('api/people/addperson', this.state.person).then(() => {
            this.getAllPeople()
        })
    }

    personChange = e => {
        const person = this.state.person
        person[e.target.name] = e.target.value
        this.setState({ person })
    }

    editPerson = p => {
        this.setState({ person: p })
    }
    onEditPersonClick = () => {
        axios.post('api/people/editperson', this.state.person).then(() => {
            this.getAllPeople()
        })
    }
    deletePerson = p => {
        axios.post('api/people/deleteperson', p).then(() => {
            this.getAllPeople()
        })
    }
    onCheckClick = p => {
        let deleteList = this.state.deleteList
        {
            deleteList.map(d => d.id).includes(p.id)
            ? deleteList = deleteList.filter(d => d.id !== p.id) : deleteList.push(p)
        }
        this.setState({ deleteList })
    }
    deletePeople = () => {
        axios.post('api/people/deletepeople', this.state.deleteList).then(() => {
            this.getAllPeople()
        })
    }


    render() {
        return (
            <div className='container'>
                <PersonForm person={this.state.person}
                    onFirstNameChange={this.personChange} onLastNameChange={this.personChange} onAgeChange={this.personChange}
                    AddPerson={this.addPerson} newPerson={!this.state.people.map(p => p.id).includes(this.state.person.id)}
                    onEditPersonClick={this.onEditPersonClick} />
                <table className="table table-bordered table-striped table-hover" style={{ marginTop: 45 }}>
                    <thead>
                        <tr>
                            <th><button className="btn btn-danger" onClick={this.deletePeople}>Delete</button></th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.people.map((person) => <PersonRow key={person.id} person={person}
                            EditPerson={() => this.editPerson(person)} DeletePerson={() => this.deletePerson(person)}
                            onCheckClick={() => this.onCheckClick(person)} />)}

                    </tbody>
                </table>
            </div>
        )
    }
}
export default PeopleTable