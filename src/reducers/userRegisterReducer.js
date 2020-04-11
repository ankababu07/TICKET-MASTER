const initialState={}
const userRegisterReducer = (state=initialState,action) => {
    switch(action.type){
        case 'SET_USERREGISTER':{
            return Object.assign({},state,action.payload)
        }
        default:{
            return Object.assign({},state)
        }
    }
}

export default userRegisterReducer
