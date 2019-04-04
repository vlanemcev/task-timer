import { call, put, takeEvery, select } from "redux-saga/effects";
import { POSTFIX } from "domain/constants";

// import timer actions
import {
  LOAD_TIMER_DATA,
  SET_TIMER,
  RESET_TIMER,
  loadSavedTimerDataSuccess,
  loadSavedTimerDataFailure,
  getTimerSelector
} from "domain/timer";

// sagas functions that will be called when the appropriate action is executed
export function* loadTimerFromLS() {
  try {
    const timer = yield call(JSON.parse, [localStorage.getItem("timer")]);
    yield put(loadSavedTimerDataSuccess(timer));
  } catch (e) {
    yield put(loadSavedTimerDataFailure(e.message));
  }
}

export function* setTimerDataInLS() {
  const timer = yield select(getTimerSelector);
  yield localStorage.setItem("timer", JSON.stringify(timer));
  yield put({ type: "LS_TIMER_UPDATED" });
}

// sagas action watchers
export function* watchRequestSavedTimerData() {
  yield takeEvery(LOAD_TIMER_DATA + POSTFIX.request, loadTimerFromLS);
}

export function* watchTimersSaga() {
  yield takeEvery([SET_TIMER, RESET_TIMER], setTimerDataInLS);
}
