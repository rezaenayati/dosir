
export default (state = {} , action) => {
    console.log("enter auth reducer");
    
    switch(action.type){
        case 'REGISTER':            
            return {
                ...state,
                email: action.email
            };
        case 'SIGNIN':
            return {
                ...state,
                email: action.email
            }    
        default:
            return state;
    }
}