import { useState, useReducer } from 'react'
import { data } from '../data'
import { CLEAR_ITEMS, RESET_ITEMS, REMOVE_ITEM } from './action'
import reducer from './reducer'

const defaultState = {
  people: data,
}

const ReducerBasics = () => {
  //   const [people, setPeople] = useState(data)
  // useState returns a state value and setState function
  const [state, dispatch] = useReducer(reducer, defaultState)
  // useReducer returns a state and dispatch function

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id)
    // setPeople(newPeople)
    dispatch({ type: REMOVE_ITEM, payload: { id } })
  }

  const clearItems = () => {
    dispatch({ type: CLEAR_ITEMS })
    // setPeople([])
  }

  const resetItems = () => {
    dispatch({ type: RESET_ITEMS })
    // setPeople(data)
  }

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      {state.people.length ? (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={clearItems}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={resetItems}
        >
          reset
        </button>
      )}
    </div>
  )
}

export default ReducerBasics
