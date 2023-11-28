import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const [user, setUser] = useState(null)

  useEffect(() => {
    // load data
    const getUser = async () => {
      try {
        const response = await fetch(url)
        const user = await response.json()
        // console.log(user)
        setUser(user)
      } catch (error) {
        setIsError(true)
        console.log(error)
      }
      setIsLoading(false)
    }
    getUser()
    setUser()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>There was an error</h2>
  }

  return (
    <section>
      <img src={user.avatar_url} alt={user.name} />
      <h2>{user.name}</h2>
      <h4>Works at {user.company}</h4>
      <p>{user.bio}</p>
    </section>
  )
}
export default MultipleReturnsFetchData
