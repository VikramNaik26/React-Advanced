import { useState } from 'react'
import { data } from '../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState(data)

  const removeUser = (id) => {
    const updatedUsers = user.filter((person) => person.id !== id)
    setUser(updatedUsers)
  }

  return (
    <div>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault()
          console.log(name)
          if (!name) return
          const fakeId = Date.now()
          const newUser = {
            id: fakeId,
            name,
          }
          setUser([...user, newUser])
          setName('')
        }}
      >
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => {
              const { name, value } = e.target
              // console.log(value)
              setName(value)
            }}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h4>users</h4>
      {user.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            <h5>{name}</h5>
            <button
              type="button"
              className="btn"
              onClick={() => {
                removeUser(id)
              }}
            >
              remove
            </button>
          </div>
        )
      })}
    </div>
  )
}
export default UserChallenge
