export function editHero(id, description){
  return {
    type: '@hero/EDIT_HERO',
    payload: {id, description}
  }
}