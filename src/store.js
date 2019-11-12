import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storageSession from 'redux-persist/es/storage/session'

import reducer from './reducer';

const persistConfig = {
    storage: storageSession,  

    key: 'root',

    // Whitelist (Save Specific Reducers)
    whitelist: [
        'auth',
        'currentUser'
    ],

    // Blacklist (Don't Save Specific Reducers)
    blacklist: [
    ],
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer, composeWithDevTools()
);
let persistor = persistStore(store);
export {
  store,
  persistor,
};