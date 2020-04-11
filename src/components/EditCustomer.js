import React,{useState,useEffect} from 'react'
import {connect}  from 'react-redux'

const EditCustomer = (props) => {
    console.log("edit cust",props)

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
            namesetstate(e.target.name)
        }
    }

    
    const handleSubmt=(e)=>{
        e.preventDefault()
        // props.dispatch(StartNewCustomerAction(name,email,mobile))
        // props.dispatch(startCustomerAction())
        // props.history.push("/customers")
        
    }

    useEffect(()=>{
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
                namesetstate(props.cust.name)
            }
        }
    },[])
    return (
        <div>
            {props.match.params.ecid}
            <form  onSubmit={handleSubmt}>
                <h1>Add Customer</h1>
                <input type='text' name='name' value={name}  onChange={handleChange}/><br/>
                <input type='text' name='email' placeholder="Email" onChange={handleChange}/><br/>
                <input type='text' name='mobile' placeholder="mobile" onChange={handleChange}/><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

const mapStateToProps=(state,ownState)=>{
    return{
        cust:state.cust.find(cst=>cst._id=ownState.match.params.ecid)
    }
}

export default connect(mapStateToProps)(EditCustomer)
