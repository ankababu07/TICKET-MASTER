import React,{useState,useEffect} from 'react'
import {startEmployeeAction} from "../actions/employeeAction"
import {connect} from 'react-redux'
import axios from 'axios'

const Employees = (props) => {
    console.log(props)
    useEffect(()=>{
        props.dispatch(startEmployeeAction())
    },[])

    const handleAddEmployee=(e)=>{
        props.history.push("/employees/new")
    }

    const handleShow=(eid)=>{
        props.history.push(`/employees/${eid}`)
        
    }

const handleRemoveEmployee=(eid)=>{
    const remove=window.confirm("Are you sure?")
    if(remove){
    axios.delete(`http://dct-ticket-master.herokuapp.com/employees/${eid}`,
        
            { headers:{'x-auth':localStorage.getItem('token')}}
         )
         .then(resp=>{
            
            
                console.log("del Cust",'--->',resp)
                // props.dispatch(startCustomerAction())
            
            
         })
         .catch(err=>{
             console.log(err)
         })
        }
}

    return (
        <div>
            <h2>Employees :{props.employee.length}</h2>
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
                            props.employee.map((emp,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.mobile}</td>
                                        <td><button onClick={()=>{handleShow(emp._id)}}>show</button></td>
                                        <td><button onClick={()=>{handleRemoveEmployee(emp._id)}}>remove</button></td>
                                    </tr>
                                )
                            })
                        }
                    
                </tbody>
            </table><br/><br/><br/>
            <button onClick={handleAddEmployee}>Add Employee</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        employee:state.employee
    }
}

export default connect(mapStateToProps)(Employees)



