import axios from 'axios'


export const setuserToken=(usrtoken)=>{
    return {type:'GET_USERTOKEN', payload:usrtoken}
}

export const StartuserTokenAction = (email,password) => {
    return(dispatch)=>{
        console.log(email,password)
        axios.post(`http://dct-ticket-master.herokuapp.com/users/login`,{ 
            "email" : email, 
            "password" : password
         })
        .then(resp=>{
            console.log(resp)
            const usrtoken=resp.data
            localStorage.setItem("token",usrtoken.token)
            dispatch(setuserToken(usrtoken))
        })
        
    }
}


