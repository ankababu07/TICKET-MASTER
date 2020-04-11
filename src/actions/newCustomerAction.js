import axios from 'axios'


export const setNewUser=(usrregister)=>{
    return {type:'ADD_CUSTOMER', payload:usrregister}
}

export const StartNewCustomerAction = (name,email,mobile) => {
    return(dispatch)=>{
        console.log(email,mobile)
        axios.post(`http://dct-ticket-master.herokuapp.com/customers`,
        {
            "name" : name, 
            "email" : email, 
            "mobile" : mobile
        },
            { headers:{'x-auth':localStorage.getItem('token')}}
         )
         .then(resp=>{
            const newuser=resp.data
            console.log("new Cust",'--->',newuser)
            dispatch(setNewUser(newuser))
         })
         .catch(err=>{
             console.log(err)
         })
    }
        
    }