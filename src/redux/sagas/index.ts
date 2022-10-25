import { all, fork } from 'redux-saga/effects';
import loanSaga from './resultsSaga';

export function* rootSaga() {
    yield all([fork(loanSaga)]);
}
