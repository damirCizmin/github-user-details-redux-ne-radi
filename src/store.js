
import { configureStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Importamo iz node_modules

import rootReducer from './redux/reducers';

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;