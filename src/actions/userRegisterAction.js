import axios from 'axios'


export const setuserRegister=(usrregister)=>{
    return {type:'SET_USERREGISTER', payload:usrregister}
}

export const StartuserRegisterAction = (name,email,password) => {
    return(dispatch)=>{
        console.log(email,password)
        axios.post(`http://dct-ticket-master.herokuapp.com/users/register`,{
            "username" : name, 
            "email" : email, 
            "password" : password
         }
         )
         .then(resp=>{
            const usrregister=resp.data
            dispatch(setuserRegister(usrregister))
         })
         .catch(err=>{
             console.log(err)
         })
    }
        
    }



