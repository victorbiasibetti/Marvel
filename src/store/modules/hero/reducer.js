import produce from 'immer'

const INITIAL_STATE = {
  heros: []
}

export default function hero(state = INITIAL_STATE, action){
  switch(action.type){
    case '@hero/EDIT_HERO':
      return produce(state, draft => {
        console.log(action.payload)
        const hero = {id: action.payload.id, description: action.payload.description }
        draft.heros.push(hero)
      })
    default:
      return state;
  }

}