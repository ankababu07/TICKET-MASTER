import React,{useState,useEffect} from 'react'
import {connect}  from 'react-redux'
import {StartEditCustomerAction} from "../actions/editCustomerAction"
import {startCustomerAction} from "../actions/customerAction"

const EditCustomer = (props) => {
    console.log("edit cust",props)

    const [name, namesetstate] = useState(props.cust.name)
    const [email, emailsetstate] = useState(props.cust.email)
    const [mobile, mobilesetstate] = useState(props.cust.mobile)


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
        // alert(name)
        props.dispatch(StartEditCustomerAction(name,email,mobile,props.match.params.ecid))

        props.dispatch(startCustomerAction())
        props.history.push(`/customers/${props.match.params.ecid}`)
        
    }

   console.log("Edit Customer comp",name,email,mobile)
    return (
        <div>
            {props.match.params.ecid}
            <form onSubmit={handleSubmt}>
                <h1>Add Customer</h1>
                <input type='text' name='name'  value={name} onChange={handleChange}/><br/>
                <input type='text' name='email' value={email} onChange={handleChange}/><br/> 
                <input type='text' name='mobile' value={mobile} onChange={handleChange} /><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

const mapStateToProps=(state,ownState)=>{
    return{
        cust:state.cust.find(cst=>cst._id==ownState.match.params.ecid)
    }
}

export default connect(mapStateToProps)(EditCustomer)
