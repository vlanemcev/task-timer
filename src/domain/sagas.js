import { all } from "redux-saga/effects";

// import task sagas
import { watchRequestSavedTasks, watchTasksSaga } from "domain/task";

// import timer sagas
import { watchRequestSavedTimerData, watchTimersSaga } from "domain/timer";

export default function* rootSaga() {
  yield all([
    watchRequestSavedTimerData(),
    watchRequestSavedTasks(),
    watchTasksSaga(),
    watchTimersSaga()
  ]);
}
