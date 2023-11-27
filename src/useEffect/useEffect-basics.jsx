import { useState, useEffect } from 'react'

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  const sayHello = () => {
    console.log('hello there')
  }

  sayHello()
  //  this sayhello function will be called every time when the component is rendered
  useEffect(() => {
    console.log('hello from useEffect')
  }, [])
  // to solve the above problem we use the useEffect

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  )
}
export default UseEffectBasics
