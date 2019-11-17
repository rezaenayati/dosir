
export default (state = {} , action) => {
    console.log("enter auth reducer");
    
    switch(action.type){
        case 'REGISTER':            
            return {
                ...state,
                email: action.email,
                authenticated: true
            };
        case 'SIGNIN':
            return {
                ...state,
                email: action.email,
                authenticated: true
            };
        case 'LOGOUT':
            return {
                ...state,
                email: undefined,
                authenticated: false
            }
        default:
            return state;
    }
}