import { call, put, takeEvery } 
from 'redux-saga';
import { fetchTodos, fetchTodosSuccess, fetchTodosFailure } 
from '../reducerss/todoSlice';

function* fetchTodosSaga() {
  try {
    const response = yield call(fetch, 'https://66fcb8cdc3a184a84d17c56e.mockapi.io/user');
    const data = yield response.json();
    yield put(fetchTodosSuccess(data)); 
  } catch (error) {
    yield put(fetchTodosFailure(error.message)); 
  }
}

function* todoSaga() {
  yield takeEvery(fetchTodos.type, fetchTodosSaga);
}

export default todoSaga;

//

