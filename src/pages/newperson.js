import axios from "axios";
import React, { Component } from "react";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditorComponent from "react-froala-wysiwyg";
class Newperson extends Component  {
    constructor(props){
        super (props)
        this.state ={
            ism: '',
            yosh: 0,
            bolim: '',
        }
        this.changeValue =this.changeValue.bind(this)
        this.addPerson = this.addPerson.bind(this)
    }
    changeValue(e){
        this.setState((state)=>{
            return{
                [e.target.getAttribute('name')]: e.target.value}
        });
    }
        addPerson(e){
            e.preventDefault()
            const {ism, yosh, bolim} = this.state
            const person = {ism, yosh, bolim}
            axios.post('http://localhost:3000/person',person)
            .then(res => {
                if (res.status === 201) {
                    this.setState(({isAlert:true}))
                    setTimeout(()=>{
                        this.setState(({isAlert:false}))
                    },3000)
                }
            })
    }
    render(){
        const alertClass = this.state.isAlert ? 'show' : '' 
        return (
        <>
            <div className={`alert alert-success ${alertClass}`} role="alert">
                Ma'lumot qo'shildi
            </div>
            <h1 className="text-center">Yengi hodim</h1>
            <form onSubmit={this.addPerson}>
                
            <input type="text" className="form-control mb-3" name="ism" onInput={this.changeValue}  placeholder="Ism kiriting"/>
            <input type="number" className="form-control mb-3" name="yosh" onInput={this.changeValue}  placeholder="Yoshingizni kiriting"/>
            <select className="form-control mb-3"  onInput={this.changeValue} name="bolim" id="">
                <option value="">Bo`limni tanlang</option>
                <option value="Web dasturlash">Web dasturlash</option>
                <option value="Mobil dasturlash">Mobil dasturlash</option>
                <option value="Qa enjenering">Qa enjenering</option>
                <option value="Boshqruv">Boshqruv</option>
            </select>
                    <FroalaEditorComponent tag='textarea'/>
            <button   type="submit" className="btn btn-primary mb-3 ">Jo'natish</button>
            </form>
        </>
        );
    }
};

export default Newperson;
