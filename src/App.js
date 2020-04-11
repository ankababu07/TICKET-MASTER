import React from 'react';
import './App.css';
import {BrowserRouter as Router,Link,Route,Switch} from "react-router-dom"
import {connect} from 'react-redux'
import Login from './components/Login';
import Home from "./components/Home"
import Register from "./components/Register"
import Customers from "./components/Customers"
import NewCustomer from "./components/NewCustomer"
import ShowCustomer from "./components/ShowCustomer"
import Tickets from './components/Tickets';
import Employees from './components/Employees';
import Departments from './components/Departments';
import ShowDepartment from './components/ShowDepartment';
import NewEmployee from './components/NewEmployee';
import EditCustomer from "./components/EditCustomer"

function App(props) {
  console.log("local storagr",localStorage.getItem('token'))
  console.log("App","-->",props)

    return (
      <div className="App">
       <Router>
        <Link to="/">Home - </Link>
        {
          Object.keys(props.userToken).length!=0 ?
          <div>
            <Link to="/customers" >Customers - </Link>
        <Link to="/departments" >Departments </Link>
        <Link to="/employees" >Employees</Link>
        <Link to="/tickets" >Tickets</Link>
        <Link to="/logout" >Logout</Link>
          </div>
          :<div>
            <Link to="/users/login">Login - </Link>
            <Link to="/users/register">Register - </Link>
          </div>
        }
        
        
        
        
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users/register" component={Register}/>
        <Route path="/users/login" component={Login}/>
        <Route exact path="/customers" component={Customers}/>
        <Route path="/customers/new" component={NewCustomer} />
        <Route path="/customers/edit/:ecid" component={EditCustomer} />
        <Route path="/customers/:cid" component={ShowCustomer} />
        <Route exact path="/departments" component={Departments}/>
        <Route path="/departments/:dptid" component={ShowDepartment}/>
        <Route exact path="/employees" component={Employees}/>
        <Route path="/employees/new" component={NewEmployee}/>
        <Route path="/tickets" component={Tickets}/>
        </Switch>
        </Router>
        
        </div>
    )
  
}

const mapStateToProps=(state)=>{
  return {
    userToken:state.userToken
  }
}

export default connect(mapStateToProps)(App);
