import { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url)
        const users = await response.json()
        // console.log(users)
        setUsers(users)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, htnl_url } = user
          return <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h5>{login}</h5>
              <a href={htnl_url}>Profile</a>
            </div>
          </li>
        })}
      </ul>
    </section>
  )
}
export default FetchData
