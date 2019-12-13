import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import auth from './reducers/auth';
import currentUser from './reducers/currentUser';
import currentPatient from './reducers/currentPatient';

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
    currentUser,
    currentPatient,
    router: routerReducer,
});