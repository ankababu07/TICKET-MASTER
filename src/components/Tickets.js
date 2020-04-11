import React,{useEffect} from 'react'
import {connect} from "react-redux"
import {startTicketsAction} from "../actions/ticketAction"

const Tickets = (props) => {
    console.log("tickets",props)

    useEffect(()=>{
        props.dispatch(startTicketsAction())
    },[])
    //startTicketsAction()
    return (
        <div>
            Tickets
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        ticket:state.ticket
    }
}

export default connect(mapStateToProps)(Tickets)
