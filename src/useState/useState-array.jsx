import { useState } from 'react'
import { data } from '../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const clearAllItems = () => {
    setPeople([])
  }

  const removeItem = (id) => {
    // console.log(id)
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <section>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(id)}
            >
              Remove
            </button>
          </div>
        )
      })}
      <button type="button" className="alert btn" onClick={clearAllItems}>
        Clear All
      </button>
    </section>
  )
}

export default UseStateArray
