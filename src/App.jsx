// import Starter from './useEffect/cleanup-function'

import Navbar from './project-structure/navbar'
/* import About from './project-structure/pages/About'
import Home from './project-structure/pages/Home' */

import { Home, About } from './project-structure/pages'

function App() {
  return (
    <div className="container">
      {/* <Starter /> */}
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default App
