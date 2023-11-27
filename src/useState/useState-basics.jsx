import { useState } from 'react'
import React from 'react'

const UseStateBasics = () => {
  /* const value = useState('hello')[0]
  console.log(value);
  const func = useState('hey')[1]
  console.log(func); */

  const [count, setCount] = useState(0)
  // const [count, setCount] = React.useState(0)
  // set state is an async function

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Increment
      </button>
    </div>
  )
}

export default UseStateBasics
