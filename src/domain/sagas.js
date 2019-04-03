import { all } from "redux-saga/effects";

// import task sagas
import {
  watchRequestSavedTasks,
  watchSaveTask,
  watchSaveGeneratedTasks,
  watchDeleteTask,
  watchDeleteTasks
} from "domain/task";

export default function* rootSaga() {
  yield all([
    watchRequestSavedTasks,
    watchSaveTask,
    watchSaveGeneratedTasks,
    watchDeleteTask,
    watchDeleteTasks
  ]);
}
