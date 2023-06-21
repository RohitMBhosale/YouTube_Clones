import {configureStore} from '@reduxjs/toolkit'
import saga from './sagas';
import reducer from './reducers';
import createSagaMiddleware from '@redux-saga/core';


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer,
    middleware:(getDefaultMiddleware) =>[
        ...getDefaultMiddleware({ thunk:false}),
        sagaMiddleware,
    ],
});
sagaMiddleware.run(saga)

export default store;