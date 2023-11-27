import { useState } from 'react'
import { people } from '../data'

const UseStateObject = () => {
  /* const [name, setName] = useState('vikram')
  const [age, setAge] = useState(19)
  const [hobby, setHobby] = useState('reads books') */
  // rather setting 3 different states, we can use object

  const [person, setPerson] = useState({
    name: 'vikram',
    age: '19',
    hobby: 'reads books',
  })

  const displayPerson = () => {
    /* setName('john')
    setAge(28)
    setHobby('Screams at the computer') */
    // these 3 setState doesn't render at three diffrent times
    // as react uses auto-batching it renders it once as a group
    // before react the secnario was somewhat different

    /* setPerson({
      name: 'John',
      age: 28,
      hobby: 'screams at the computer',
    }) */

    // to update the object use spread operator
    setPerson({ ...person, name: 'John' })
  }

  const { name, age, hobby } = person
  return (
    <section>
      <h3> {name}</h3>
      <h3> {age}</h3>
      <h4> {hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show john
      </button>
    </section>
  )
}

export default UseStateObject
