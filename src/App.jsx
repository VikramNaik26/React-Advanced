// import Example from './project-structure/Example'
// import List from './leverage-javascript/List'

import Navbar from './context-api/Navbar'
import AppContext, { useGlobalContext } from './global-context-api/context'

// import OtherInputs from './forms/other-inputs'

function App() {
  // const { name } = useGlobalContext()
  return (
    // <div className="container">
    //   {/* <Example /> */}
    //   {/* <List /> */}
    //   <Navbar/>
    // </div>
    <AppContext>
      <Navbar />
    </AppContext>
  )
}

export default App
