export default (state = {} , action) => {
    console.log("current patient");
    
    switch(action.type){
        case 'SUBMIT_PATIENT_INFO':            
            return {
                ...state,
                info: action.info,
            };
        default:
            return state;
    }
}