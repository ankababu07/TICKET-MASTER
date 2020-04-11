import axios from 'axios'

export const setTickets=(tickets)=>{
    return {type:'GET_TICKETS',payload:tickets}
}


export const startTicketsAction=()=>{
    return (dispatch)=>{
        axios.get(`http://dct-ticket-master.herokuapp.com/tickets`,{ headers:{'x-auth':localStorage.getItem('token')}})
                .then(resp=>{
                    const tickets=resp.data
                    console.log("tickets--->",resp)
                    dispatch(setTickets(tickets))
                    
                })
    }
}