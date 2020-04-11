import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {startCustomerAction} from "../actions/customerAction"
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const Customers = (props) => {

    console.log(props)
    useEffect(()=>{
        props.dispatch(startCustomerAction())
    },[])

    const handleAddCustomer=(e)=>{
        props.history.push("/customers/new")
    }

    const handleShow=(cid)=>{
        console.log(cid)
        props.history.push(`/customers/${cid}`)
        
    }

const handleRemoveCustomer=(cid)=>{
    const remove=window.confirm("Are you sure?")
    if(remove){
    axios.delete(`http://dct-ticket-master.herokuapp.com/customers/${cid}`,
        
            { headers:{'x-auth':localStorage.getItem('token')}}
         )
         .then(resp=>{
            
            
                console.log("del Cust",'--->',resp)
                props.dispatch(startCustomerAction())
            
            
         })
         .catch(err=>{
             console.log(err)
         })
        }
}

    return (
        <div>
            <h2>Customers :{props.cust.length}</h2>
            <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>mobile</th>
                        <th>Actions</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            props.cust.map((cst,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{cst.name}</td>
                                        <td>{cst.email}</td>
                                        <td>{cst.mobile}</td>
                                        <td><button onClick={()=>{handleShow(cst._id)}}>show</button></td>
                                        <td><button onClick={()=>{handleRemoveCustomer(cst._id)}}>remove</button></td>
                                    </tr>
                                )
                            })
                        }
                    
                </tbody>
            </table><br/><br/><br/>
            <button onClick={handleAddCustomer}>Add Customer</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        cust:state.cust
    }
}
export default connect(mapStateToProps)(Customers)
