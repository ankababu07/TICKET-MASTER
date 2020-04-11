import axios from 'axios'

export const setDepartment=(dept)=>{
    return {type:'GET_DEPARTMENTS',payload:dept}
}


export const startDepartmentAction=()=>{
    return (dispatch)=>{
        axios.get(`http://dct-ticket-master.herokuapp.com/departments`,{ headers:{'x-auth':localStorage.getItem('token')}})
                .then(resp=>{
                    const dept=resp.data
                    console.log("departments",resp)
                    dispatch(setDepartment(dept))
                    
                })
    }
}