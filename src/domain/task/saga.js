import { call, put, takeEvery, select } from "redux-saga/effects";
import { POSTFIX } from "domain/constants";

// import task actions
import {
  LOAD_TASKS,
  ADD_TASK,
  ADD_TASKS,
  DELETE_TASK,
  DELETE_ALL_TASKS,
  loadSavedTasksSuccess,
  loadSavedTasksFailure,
  getTasksSelector
} from "domain/task";

// sagas functions that will be called when the appropriate action is executed
export function* loadTasksFromLS() {
  try {
    const tasks = yield call(JSON.parse, [localStorage.getItem("tasks")]);
    yield put(loadSavedTasksSuccess(tasks));
  } catch (e) {
    yield put(loadSavedTasksFailure(e.message));
  }
}

export function* setTasksInLS() {
  const tasks = yield select(getTasksSelector);
  yield localStorage.setItem("tasks", JSON.stringify(tasks));
  yield put({ type: "LS_TASKS_UPDATED" });
}

// sagas action watchers
export function* watchRequestSavedTasks() {
  yield takeEvery(LOAD_TASKS + POSTFIX.request, loadTasksFromLS);
}

export function* watchTasksSaga() {
  yield takeEvery(
    [ADD_TASK, ADD_TASKS, DELETE_TASK, DELETE_ALL_TASKS],
    setTasksInLS
  );
}
