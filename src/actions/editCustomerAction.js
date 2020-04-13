import axios from 'axios'


export const setEditUser=(edituser)=>{
    return {type:'EDIT_CUSTOMER', payload:edituser}
}

export const StartEditCustomerAction = (name,email,mobile,ecid) => {
    console.log("Edit Customer",name,email,mobile)
    return(dispatch)=>{
        console.log("Edit Customer after dispatch") 
        axios.put(`http://dct-ticket-master.herokuapp.com/customers/${ecid}`,
        {
            "name" : name, 
            "email" : email, 
            "mobile" : mobile
        },
            { headers:{'x-auth':localStorage.getItem('token')}}
         )
         .then(resp=>{
            const edituser=resp.data
            console.log("edit Cust",'--->',edituser)
            dispatch(setEditUser(edituser))
         })
         .catch(err=>{
             console.log(err)
         })
    }
        
    }