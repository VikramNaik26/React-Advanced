import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    // setValue(value + 1)
    /* setValue((currentState) => {
      const newState = currentState + 1
      return newState
    }) */

    // use case
    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1
      })
    }, 3000)
  }

  return (
    <section>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Increment
      </button>
    </section>
  )
}

export default UseStateGotcha
