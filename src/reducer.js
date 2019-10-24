import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import auth from './reducers/auth';

const testRedux = (state = {} , action) => {
    switch(action.type){
        case 'TESTING':
            return {
                ...state,
                logedIn: "true",
            };
        default:
            return state;
    }
}

export default combineReducers({
    testRedux,
    auth,
    router: routerReducer,
});