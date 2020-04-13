import axios from 'axios'

export const setCustomers=(cust)=>{
    return {type:'GET_CUSTOMERS',payload:cust}
}


export const startCustomerAction=()=>{
    return (dispatch)=>{
        axios.get(`http://dct-ticket-master.herokuapp.com/customers`,{ headers:{'x-auth':localStorage.getItem('token')}})
                .then(resp=>{
                    const cust=resp.data
                    console.log("Customers store",resp)
                    dispatch(setCustomers(cust))
                    
                })
    }
}