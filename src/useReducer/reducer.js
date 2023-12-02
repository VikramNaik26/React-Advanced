import { data } from '../data'
import { CLEAR_ITEMS, RESET_ITEMS, REMOVE_ITEM } from './action'

const reducer = (state, action) => {
  //   console.log(state, action)
  if (action.type === CLEAR_ITEMS) {
    return { ...state, people: [] }
  }
  if (action.type === RESET_ITEMS) {
    return { ...state, people: data }
  }
  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    )
    return { ...state, people: newPeople }
  }
  //   return state
  throw new Error(`No matching action type ${action.type}`)
}
export default reducer
