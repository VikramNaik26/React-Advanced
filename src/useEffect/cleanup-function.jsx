import { useEffect, useState } from 'react'

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  )
}

const RandomComponent = () => {
  /* useEffect(() => {
    console.log('hmm, this is interesting')
    /* setInterval(() => {
      console.log('hello from interval')
    }, 1000) 
    // this will run even when the component is not rendered
    // so we use cleanup func
    const intId = setInterval(() => {
      console.log('hello from interval')
    }, 1000)
    return () => {
      clearInterval(intId)
    }
  }, []) */

  useEffect(() => {
    const someFunc = () => {}
    window.addEventListener('scroll', someFunc)
    return () => window.removeEventListener('scroll', someFunc)
  }, [])

  return <h1>Hello there</h1>
}

export default CleanupFunction
