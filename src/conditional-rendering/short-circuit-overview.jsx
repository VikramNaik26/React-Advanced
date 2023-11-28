import { useState } from 'react'

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState('')
  // truthy
  const [name, setName] = useState('vikram')

  return (
    <div>
      <h4>Falsy OR: {text || 'hello'}</h4>
      <h4>Falsy AND : {text && 'hello'}</h4>
      <h4>Falsy OR: {name || 'hello'}</h4>
      <h4>Falsy OR: {name && `hello ${name}`}</h4>
    </div>
  )
}
export default ShortCircuitOverview
