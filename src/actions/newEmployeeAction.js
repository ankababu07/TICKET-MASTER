import axios from 'axios'


export const setNewEmployee=(newemp)=>{
    return {type:'ADD_EMPLOYEE', payload:newemp}
}

export const StartNewEmployeeAction = (name,email,mobile,id) => {
    return(dispatch)=>{
        console.log(email,mobile)
        axios.post(`http://dct-ticket-master.herokuapp.com/employees`,
        {
            "name" : name, 
            "email" : email, 
            "mobile" : mobile,
            "department":id

        },
            { headers:{'x-auth':localStorage.getItem('token')}}
         )
         .then(resp=>{
            const newemp=resp.data
            console.log("new employee",'--->',newemp)
            dispatch(setNewEmployee(newemp))
         })
         .catch(err=>{
             console.log(err)
         })
    }
        
    }