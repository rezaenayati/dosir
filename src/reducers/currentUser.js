export default (state = {} , action) => {
    // console.log("enter currentUser reducer");
    
    switch(action.type){
        case 'LOADDOCTORINFO':
            return {
                ...state,
                doctor: action.doctor
            };
        case 'START_EDIT':{
            let t0 = {}; 
            t0 = Object.assign({}, state.doctor);   
            return {
                ...state,
                editedDoctor: t0,
            };
        }        
        case "UPDATE_FIELD_EDITOR":{
            console.log("UPDATE_FIELD_EDITOR");
            const temp = {[action.key]: action.value };
            Object.assign(state.editedDoctor , temp);            
            return state;
        }
        case 'SUBMIT_EDIT':{
            console.log("SUBMIT_EDIT");
            Object.assign(state.doctor , state.editedDoctor);
            state.editedDoctor = {};
            return state;
        }    
        default:
            return state;     
    }
}