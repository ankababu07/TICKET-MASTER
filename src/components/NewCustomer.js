import React,{useState} from 'react'
import {StartNewCustomerAction} from "../actions/newCustomerAction"
import {startCustomerAction} from "../actions/customerAction"
import {connect} from 'react-redux'
 
const NewCustomer = (props) => {

    const [name, namesetstate] = useState('')
    const [email, emailsetstate] = useState('')
    const [mobile, mobilesetstate] = useState('')


    const handleChange=(e)=>{
        if(e.target.name==='email'){
            console.log(e.target.name,'--->',e.target.value)
            emailsetstate(e.target.value)
        }
        if(e.target.name==='mobile'){
            console.log(e.target.name,'--->',e.target.value)
            mobilesetstate(e.target.value)
        }
        if(e.target.name==='name'){
            console.log(e.target.name,'--->',e.target.value)
            namesetstate(e.target.value)
        }
    }

    
    const handleSubmt=(e)=>{
        e.preventDefault()
        props.dispatch(StartNewCustomerAction(name,email,mobile))
        // props.dispatch(startCustomerAction())
        props.history.push("/customers")
        
    }

    
    return (
        <div>
            <form  onSubmit={handleSubmt}>
                <h1>Add Customer</h1>
                <input type='text' name='name' placeholder="Username" onBlur={handleChange}/><br/>
                <input type='text' name='email' placeholder="Email" onBlur={handleChange}/><br/>
                <input type='text' name='mobile' placeholder="mobile" onBlur={handleChange}/><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default connect()(NewCustomer)
