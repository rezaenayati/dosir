
export default (state = {} , action) => {
    console.log("enter auth reducer");
    
    switch(action.type){
        case 'REGISTER':            
            return {
                ...state,
                tokens: action.tokens,
                authenticated: true
            };
        case 'SIGNIN':
            return {
                ...state,
                tokens: action.tokens,
                authenticated: true
            };
        case 'LOGOUT':
            return {
                ...state,
                phone: undefined,
                authenticated: false
            }
        default:
            return state;
    }
}