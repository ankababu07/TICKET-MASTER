
const initialState=[]
const customerReducer = (state=initialState,action) => {
    console.log(action.type,'-->',action.payload)
 switch(action.type){
     case 'GET_CUSTOMERS':{
         console.log("-------------------",[].concat(action.payload))
         return [].concat(action.payload)
     }
     default:{
        return [...state]
     }
 }
}

export default customerReducer
