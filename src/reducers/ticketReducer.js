
const initialState=[]
const ticketReducer = (state=initialState,action) => {
    console.log(action.type,'-->',action.payload)
 switch(action.type){
     case 'GET_TICKETS':{
         console.log("-------------------",[].concat(action.payload))
         return [].concat(action.payload)
     }
     default:{
        return [...state]
     }
 }
}

export default ticketReducer
