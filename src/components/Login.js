import React,{useState} from 'react'
import {connect} from 'react-redux'
import {StartuserTokenAction} from '../actions/userTokenAction'
import {Redirect} from 'react-router-dom'
import App from "../App"

const Login = (props) => {
    const [email, emailsetstate] = useState('')
    const [password, passwordsetstate] = useState('')
    const [status,setstatus]=useState(false)


    const handleChange=(e)=>{
        if(e.target.name==='email'){
            emailsetstate(e.target.value)
        }
        if(e.target.name==='password'){
            passwordsetstate(e.target.value)
        }
    }
    

    const handleSubmt=(e)=>{
        e.preventDefault()
        props.dispatch(StartuserTokenAction(email,'ABC123abc'))
    }

    // useEffect(() => {
    //     // props.dispatch(StartuserTokenAction('babu007@gmail.com','ABC123abc'))
    // }, [])

    console.log("login",props.userToken)
    return (
        <div>
            <form  onSubmit={handleSubmt}>
                <h1>Login</h1>
                <input type='text' name='email' placeholder="Email" onBlur={handleChange}/><br/>
                <input type='password' name='password' placeholder="Password" onBlur={handleChange}/><br/>
                <input type="submit" value="Login"/>
            </form>
             {/* {props.userToken.token && <App  status={props.userToken.token}/>} */}
             {props.userToken.token && <Redirect to="/">Login - </Redirect>}
            
        </div>
    )
}
const mapStateToProps=(state)=>{
   return{
    userToken:state.userToken
   }
}

export default connect(mapStateToProps)(Login)
