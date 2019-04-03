import { call, put, takeEvery } from "redux-saga/effects";
import { POSTFIX } from "../constants";

// import task actions
import {
  LOAD_TASKS,
  ADD_TASK,
  ADD_TASKS,
  DELETE_TASK,
  DELETE_ALL_TASKS,
  loadSavedTasks,
  loadSavedTasksSucces,
  loadSavedTasksFailure
} from "domain/task";

// sagas functions that will be called when the appropriate action is executed
export function* loadTasksFromLS() {
  try {
    const tasks = yield call(JSON.parse(localStorage.getItem("tasks")));
    yield put(loadSavedTasksSucces(tasks));
  } catch (e) {
    yield put(loadSavedTasksFailure(e.message));
  }
}

export function* saveTasksInLS() {
  yield call(localStorage.setItem("tasks", JSON.stringify()));
  yield put({ type: "LS_TASKS_UPDATED" });
}

export function* deleteTasksInLS() {
  yield call(localStorage.clear("tasks", JSON.stringify()));
  yield put({ type: "LS_TASKS_DELETED" });
}

// sagas action watchers
export function* watchRequestSavedTasks() {
  yield takeEvery(LOAD_TASKS + POSTFIX.request, loadTasksFromLS);
}

export function* watchSaveTask() {
  yield takeEvery(ADD_TASK, saveTasksInLS);
}

export function* watchSaveGeneratedTasks() {
  yield takeEvery(ADD_TASKS, saveTasksInLS);
}

export function* watchDeleteTask() {
  yield takeEvery(DELETE_TASK, deleteTasksInLS);
}

export function* watchDeleteTasks() {
  yield takeEvery(DELETE_ALL_TASKS, deleteTasksInLS);
}
