import React,{useState} from 'react'
import {Redirect} from "react-router-dom"
import {StartuserRegisterAction} from  "../actions/userRegisterAction"
import {connect } from "react-redux"

const Register = (props) => {
    console.log("props-->",props)
    const [name, namesetstate] = useState('')
    const [email, emailsetstate] = useState('')
    const [password, passwordsetstate] = useState('')


    const handleChange=(e)=>{
        if(e.target.name==='email'){
            console.log(e.target.name,'--->',e.target.value)
            emailsetstate(e.target.value)
        }
        if(e.target.name==='password'){
            console.log(e.target.name,'--->',e.target.value)
            passwordsetstate(e.target.value)
        }
        if(e.target.name==='name'){
            console.log(e.target.name,'--->',e.target.value)
            namesetstate(e.target.value)
        }
    }

    
    const handleSubmt=(e)=>{
        e.preventDefault()
        props.dispatch(StartuserRegisterAction(name,email,password))
        
    }

 
    
    return (
        <div>
            <form  onSubmit={handleSubmt}>
                <h1>Register</h1>
                <input type='text' name='name' placeholder="Username" onBlur={handleChange}/><br/>
                <input type='text' name='email' placeholder="Email" onBlur={handleChange}/><br/>
                <input type='password' name='password' placeholder="Password" onBlur={handleChange}/><br/>
                <input type="submit" value="Register"/>
            </form>
             {props.userRegister.email && <Redirect to="/users/login">Login - </Redirect>}
            
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        userRegister:state.userRegister
    }
 }

export default connect(mapStateToProps)(Register)
