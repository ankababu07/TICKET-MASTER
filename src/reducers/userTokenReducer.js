const initialState={}
const userTokenReducer = (state=initialState,action) => {
    switch(action.type){
        case 'GET_USERTOKEN':{
            return Object.assign({},state,action.payload)
        }
        default:{
            return Object.assign({},state)
        }
    }
}

export default userTokenReducer
