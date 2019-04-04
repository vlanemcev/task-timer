import { all } from "redux-saga/effects";

// import task sagas
import { watchRequestSavedTasks, watchTasksSaga } from "domain/task";

// import timer sagas
import { watchTimersSaga } from "domain/timer";

export default function* rootSaga() {
  yield all([watchRequestSavedTasks(), watchTasksSaga(), watchTimersSaga()]);
}
