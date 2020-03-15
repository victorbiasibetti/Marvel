import { all } from 'redux-saga/effects'

import char from './chars/sagas'

export default function* rootSaga(){
  return yield all([char])
}