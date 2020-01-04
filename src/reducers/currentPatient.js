export default (state = {} , action) => {
    console.log("current patient");
    
    switch(action.type){
        case 'SUBMIT_PATIENT_INFO':            
            return {
                ...state,
                info: action.info,
            };
        case 'SUBMIT_REPORT_DETAIL':
            return {
                ...state,
                report: action.report
            };
        default:
            return state;
    }
}