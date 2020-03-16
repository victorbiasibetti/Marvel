import {all, takeLatest} from 'redux-saga/effects'


export function editHero({payload}){

  const {id, description} = payload;

  console.log('entrou no editHero do saga')

}

export default all([])