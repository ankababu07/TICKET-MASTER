import React from 'react'



const initialState={}
const newCustomerReducer = (state=initialState,action) => {
    console.log(action.type,'-->',action.payload)
 switch(action.type){
     case 'ADD_CUSTOMER':{
         return Object.assign({},state,action.payload)
     }
     default:{
        return Object.assign({},state)
     }
 }
}

export default newCustomerReducer
