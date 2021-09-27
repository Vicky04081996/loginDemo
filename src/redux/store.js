import { createStore,compose , applyMiddleware} from 'redux';
import RootReducer from './reducer/index'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware();
// const store = compose(
//     applyMiddleware(sagaMiddleware),
//     window.devToolsExtension && window.devToolsExtension(),
// )(createStore)(rootReducer);


const middlewar = [sagaMiddleware]

const store = createStore(RootReducer, applyMiddleware(...middlewar))

sagaMiddleware.run(rootSaga);

export default store;
