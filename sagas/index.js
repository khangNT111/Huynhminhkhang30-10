
import { all } 
from 'redux-saga';
import todoSaga 
from './todoSaga';

export default function* rootSaga() {
  yield all([todoSaga()]);
}
