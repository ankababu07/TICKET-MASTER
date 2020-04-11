import React from 'react'
import {connect} from 'react-redux'

const ShowDepartment = (props) => {
    console.log("showCustomer",props)
    return (
        <div>
            <h2>{props.dept.name}</h2>
            <button>All</button>
            <button>Pending</button>
            <button>Completed</button>
        </div>
    )
}

const mapStateToProps=(state,ownState)=>{
    return {
        dept:state.dept.find(dpt=>dpt._id=ownState.match.params.dptid)
    }
}
export default connect(mapStateToProps)(ShowDepartment)
