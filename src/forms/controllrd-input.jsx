import { useState } from 'react'

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  /* const handleChange = (e) => {
    const { name, value } = e.target
    console.log(value)
    console.log(name)
    setName(value)
  } */

  const handleSubmit = (e) => {
    e.preventDefault()
    // do something
    console.log(name, email)
  }

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <h4>controlled input</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          value={name}
          onChange={(e) => {
            const { name, value } = e.target
            setName(value)
          }}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          name="email"
          value={email}
          onChange={(e) => {
            const { name, value } = e.target
            setEmail(value)
          }}
        />
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  )
}
export default ControlledInputs
