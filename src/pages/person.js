import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


class Person extends Component{
        constructor(props){
            super(props)
        this.state = {
            persons:[]
        }
        this.getPersons =  this.getPersons.bind(this)
        this.delPerson = this.delPerson.bind(this)
    }
    componentDidMount(){this.getPersons()}
    delPerson(id){
        axios.delete(`http://localhost:3000/person/${id}`).then(res =>{
            console.log(res);
            if (res.status === 200){

            }
            const {persons} = this.state
            const index =  persons.findIndex(person => person.id === id)
            const before = persons.slice(0,index)
            const after = persons.slice(index+1)
            const newperson = {...before, ...after}
            this.setState(({persons:newperson}))
        })
    }
    getPersons(){
        axios.get('http://localhost:3000/person')
        .then(res => {
            if(res.status === 200){
                this.setState(({persons:res.data}))
            }
        })
        }
        render(){
            console.log("render");
            const {persons} = this.state
            const personsArr = persons.map(person=>{
                return (
                    <tr key={person.id}>
                        <td>{person.id}</td>
                        <td>{person.ism}</td>
                        <td>{person.yosh}</td>
                        <td>{person.bolim}</td>
                        <td>
                            <button className="btn btn-danger" onClick={()=>{this.delPerson(person.id)}}>X</button>
                        
                        </td>
                    </tr>
                );
            })
            return (
                <>
                    <div className="d-flex justify-content-between align-items-center">
                    <h1>Xodimlar ro`yhati</h1>
                    <Link to="/newperson" className="btn btn-success">
                        Yangi hodim
                    </Link>
                    </div>
                    <table className="table  table-hover"  >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Ismi</th>
                                <th>Yoshi</th>
                                <th>Ishlash bo'limi</th>
                                <th>O'chirish</th>
                            </tr>
                        </thead>
                        <tbody>{personsArr}</tbody>
                    </table>
                </>
                );
        }
    
}

export default Person 