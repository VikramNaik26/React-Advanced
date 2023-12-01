import { useState } from 'react'
import NavLinks from './NavLinks'

const Navbar = () => {
  const [user, setUser] = useState({ name: 'Vikram' })
  const logout = () => {
    setUser()
  }

  return (
    <nav className="navbar">
      <h5 style={{ textTransform: 'uppercase' }}>context api</h5>
      <NavLinks user={user} logout={logout} />
    </nav>
  )
}
export default Navbar
