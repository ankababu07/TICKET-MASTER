import {createStore,combineReducers,applyMiddleware} from 'redux'
import userTokenReducer from "../reducers/userTokenReducer"
import userRegisterReducer from "../reducers/userRegisterReducer"
import customerReducer from "../reducers/customerReducer"
import newCustomerReducer from "../reducers/newCustomerReducer"
import deptReducer from "../reducers/deptReducer"
import ticketReducer from "../reducers/ticketReducer"
import employeeReducer from "../reducers/employeeReducer"
import newEmployeeReducer from "../reducers/newEmployeeReducer"
import thunk from 'redux-thunk'

const configStore = () => {
    const store=createStore(combineReducers({
        userRegister:userRegisterReducer,
        userToken:userTokenReducer,
        cust:customerReducer,
        newCustomer:newCustomerReducer,
        dept:deptReducer,
        ticket:ticketReducer,
        employee:employeeReducer,
        newEmployee:newEmployeeReducer
    }),applyMiddleware(thunk))
    return store
}

export default configStore
