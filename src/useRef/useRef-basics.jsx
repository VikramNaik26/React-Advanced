import { useEffect, useRef, useState } from 'react'

const UseRefBasics = () => {
  const [value, setValue] = useState(0)
  const refContainer = useRef(null)
  const isMounted = useRef(false)
  //   console.log(refContainer);

  /* useEffect(() => {
    console.log(refContainer)
  }) */

  useEffect(() => {
    refContainer.current.focus()
  })
  // to initial focus on element

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return
    }
    // initial it will not be rendered
    console.log('re rendered')
  }, [value])

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = refContainer.current.value
    // console.log(name)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            ref={refContainer}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  )
}

export default UseRefBasics
