import axios from 'axios'

export const setEmployees=(emp)=>{
    return {type:'GET_EMPLOYEES',payload:emp}
}


export const startEmployeeAction=()=>{
    return (dispatch)=>{
        axios.get(`http://dct-ticket-master.herokuapp.com/employees`,{ headers:{'x-auth':localStorage.getItem('token')}})
                .then(resp=>{
                    const emp=resp.data
                    console.log("Employees",resp)
                    dispatch(setEmployees(emp))
                    
                })
    }
}