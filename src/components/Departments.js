import React,{useState,useEffect} from 'react'
import {startDepartmentAction} from "../actions/departmentAction"
import {connect} from 'react-redux'
import axios from 'axios'

const Departments = (props) => {
    const [dept, deptsetstate] = useState('')

    useEffect(()=>{
        props.dispatch(startDepartmentAction())
    },[])

    const handleDepartmentName=(e)=>{
        deptsetstate(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(`http://dct-ticket-master.herokuapp.com/departments`,
        {
            "name" : dept
        },
            { headers:{'x-auth':localStorage.getItem('token')}}
         )
         .then(resp=>{
            console.log(resp)
            props.dispatch(startDepartmentAction())
         })
         .catch(err=>{
             console.log(err)
         })
    }
    const handleShow=(dptid)=>{
        props.history.push(`/departments/${dptid}`)
    }

    const handleRemoveDepartment=(dptid)=>{
        const remove=window.confirm("Are you sure?")
        if(remove){
        axios.delete(`http://dct-ticket-master.herokuapp.com/departments/${dptid}`,
            
                { headers:{'x-auth':localStorage.getItem('token')}}
             )
             .then(resp=>{
                
                
                    console.log("del dept",'--->',resp)
                    props.dispatch(startDepartmentAction())
                
                
             })
             .catch(err=>{
                 console.log(err)
             })
    }
}
    // console.log("dept props",props.dept)
    return (
        <div>
            
            <h1>Departments : {props.dept.length}</h1>
            <table>
                <thead>
                    {
                        props.dept.map((dep,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{dep.name}</td>
                                    <td><button onClick={()=>{handleShow(dep._id)}}>show</button></td>
                                    <td><button onClick={()=>{handleRemoveDepartment(dep._id)}}>remove</button></td>
                                </tr>
                            )
                        })
                    }
                </thead>
            </table>
            <form onSubmit={handleSubmit}>
            <h1>Add Department</h1>
            <input type="text" name='department' onBlur={handleDepartmentName} />
            <input type="submit" value="Add" />
            </form>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        dept:state.dept
    }
}

export default connect(mapStateToProps)(Departments)
