
export default (state = {} , action) => {
    switch(action.type){
        case 'REGISTER':
            return {
                ...state,
                user: {email: action.payload.email,}
            };
        case 'SIGNIN':
            return {
                ...state,
                users: {email: action.payload.email,}
            }    
        default:
            return state;
    }
}