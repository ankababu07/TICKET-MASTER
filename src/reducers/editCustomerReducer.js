const initialState=[]
const editCustomerReducer = (state=initialState,action) => {
    console.log(action.type,'-->',action.payload)
 switch(action.type){
     case 'EDIT_CUSTOMER':{
         console.log("-------------------",[].concat(action.payload))
         return [].concat(action.payload)
     }
     default:{
        return [...state]
     }
 }
}

export default editCustomerReducer