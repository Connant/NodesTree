import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { routesReducer } from './reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['routes']
};

export const rootReducer = combineReducers({
    routes: routesReducer,
});


// export default rootReducer;
export default persistReducer(persistConfig, rootReducer);
