import React,{useState,useEffect} from 'react'
import {StartNewEmployeeAction} from "../actions/newEmployeeAction"
import {startEmployeeAction} from "../actions/employeeAction"
import {startDepartmentAction} from "../actions/departmentAction"
import {connect} from 'react-redux'
 
const NewEmployee = (props) => {

    const [name, namesetstate] = useState('')
    const [email, emailsetstate] = useState('')
    const [password, mobilesetstate] = useState('')
    const [department, deptsetstate]=useState([])
    const [deptselected,deptselectedstate]=useState('')
    const [deptid,deptidstate]=useState('')
    
    


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
            
            namesetstate(e.target.value)
        }
        // if(e.target.name==='department'){
        //     console.log(e.target.name,'--->',e.target.value)
        //     deptsetstate(props.dept)
        // }

        
    }

   const handleClick=(e)=>{
    console.log("label--->",e.target.selectedOptions[0].label)
    console.log("name",e.target.name,'--->',e.target.selectedOptions[0].name)
    console.log("value",e.target.value,'--->',e.target.selectedOptions[0].value)
        console.log("emp==>",e.target.value,e.target.selected)
            deptsetstate(props.dept)
            deptidstate(e.target.value)
            deptselectedstate(e.target.selectedOptions[0].name)
    }

    useEffect(()=>{
        props.dispatch(startDepartmentAction())
        
    },[])

    const handleSubmt=(e)=>{
        e.preventDefault()
        props.dispatch(StartNewEmployeeAction(name,email,password,deptid))
        // props.dispatch(startCustomerAction())
        props.history.push("/employees")
        
    }

    console.log("newemployee","-->",props)
    return (
        <div>
            <form  onSubmit={handleSubmt}>
                <h1>Add Employee</h1>
                <label>Name</label><br/>
                <input type='text' name='name' placeholder="Username" onBlur={handleChange}/><br/>
                <label>Email</label><br/>
                <input type='text' name='email' placeholder="Email" onBlur={handleChange}/><br/>
                <label>Mobile</label><br/>
                <input type='text' name='mobile' placeholder="mobile" onBlur={handleChange}/><br/>
                <label>Department</label><br/>
                <select name='department' onClick={handleClick} >
                <option value="select">select</option>
                {props.dept.map(dpt=>{
                    return (
                    <option value={dpt._id}  key={dpt._id} >{dpt.name} </option>
                    )
                })}
                </select><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        dept:state.dept
    }
}

export default connect(mapStateToProps)(NewEmployee)