export default (state = {} , action) => {
    console.log("enter currentUser reducer");
    
    switch(action.type){
        case 'LOADDOCTORINFO':
            return {
                ...state,
                doctor: action.doctor
            };
        default:
            return state;     
    }
}