const ControlledInputs = () => {
  return (
    <form action="" className="form">
      <h4>controlled input</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input type="text" name="" id="name" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="" className="form-label">
          email
        </label>
        <input type="email" name="" id="email" className="form-input" />
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  )
}
export default ControlledInputs
