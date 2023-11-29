import { useState } from 'react'

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false)

  /* const toggleAlert = () => {
    showAlert ? setShowAlert(false) : setShowAlert(true)
  } */
  // there is a better way to do this

  return (
    <div>
      {/* <button className="btn" onClick={toggleAlert}>
        toggle
      </button> */}
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>
        toggle
      </button>
      {showAlert && <Alert />}
    </div>
  )
}

const Alert = () => <div className="alert alert-danger">Hello World</div>

export default ToggleChallenge
