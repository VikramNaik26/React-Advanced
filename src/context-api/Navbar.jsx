import { useState, createContext, useContext } from 'react'
import NavLinks from './NavLinks'

export const NavbarContext = createContext()

// custom hooks
export const useAppContext = () => useContext(NavbarContext)
const Navbar = () => {
  const [user, setUser] = useState({ name: 'Vikram' })
  const logout = () => {
    setUser()
  }

  return (
    <NavbarContext.Provider value={{ user, logout}}>
      <nav className="navbar">
        <h5 style={{ textTransform: 'uppercase' }}>context api</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  )
}
export default Navbar
