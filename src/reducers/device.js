
export default (state = {} , action) => {
    console.log("enter device reducer");
    
    switch(action.type){
        case 'SET_DEVICE_MOBILE':            
            return {
                ...state,
                isMobile: true
            };
        case 'SET_DEVICE_DESKTOP':            
            return {
                ...state,
                isMobile: false
            };
        default:
            return state;
    }
}