import { useState } from 'react'

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('')
  // truthy
  const [name, setName] = useState('susan')
  const [user, setUser] = useState({ name: 'john' })
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      <h4>{name || 'hey there'}</h4>
      {text && (
        <div>
          <h4>Whatever returns</h4>
          <h2>{name}</h2>
        </div>
      )}
      {user && <SomeComponent name={user.name} />}
    </div>
  )
}

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h4>Whatever returns</h4>
      <h2>{name}</h2>
    </div>
  )
}

export default ShortCircuitExamples
