import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { resultsSlice } from './slices/index';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';

const rootReducer = combineReducers({ resultsSlice: resultsSlice.reducer });
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const action = (type) => store.dispatch({ type });
