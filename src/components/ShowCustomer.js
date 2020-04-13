import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {startCustomerAction} from "../actions/customerAction"

const ShowCustomer = (props) => {

    const handleEdit=(ecid)=>{
        props.history.push(`/customers/edit/${ecid}`)
    }

    return (
        <div>
            <h2>{props.cust.name} - {props.cust.email}</h2>
            <button onClick={()=>{handleEdit(props.cust._id)}}>edit</button><br/>
            <button>All</button>
            <button>Pending</button>
            <button>Completed</button>
        </div>
    )
}

const mapStateToProps=(state,ownState)=>{
    console.log("ownState",ownState)
    return {
        cust:state.cust.find(cst=>cst._id==ownState.match.params.cid)
    }
}
export default connect(mapStateToProps)(ShowCustomer)
