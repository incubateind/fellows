import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Custom

import sagas from '../Store/Sagas/index';
import authReducer from './Reducers/authreducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, {}, enhancer);
sagaMiddleware.run(sagas);

export default store;
