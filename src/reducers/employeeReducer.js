
const initialState=[]
const employeeReducer = (state=initialState,action) => {
    console.log(action.type,'-->',action.payload)
 switch(action.type){
     case 'GET_EMPLOYEES':{
         console.log("-------------------",[].concat(action.payload))
         return [].concat(action.payload)
     }
     default:{
        return [...state]
     }
 }
}

export default employeeReducer
