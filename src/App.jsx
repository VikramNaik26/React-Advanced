// import Example from './project-structure/Example'
// import List from './leverage-javascript/List'

import LowerState from './performance/hooks'
import LatestReact from './performance/react-18'
import FetchData from './useEffect/fetch-data'
import PropDrilling from './useState/propDrilling'
import UseStateBasics from './useState/useState-basics'

// import OtherInputs from './forms/other-inputs'

function App() {
  // const { name } = useGlobalContext()
  return (
    <div className="container">
      {/* <Example /> */}
      {/* <List /> */}
      {/* <LowerStateChallenge /> */}
      {/* <LatestReact /> */}
      {/* <UseStateBasics /> */}
      <PropDrilling title={'Vikram'} />
      <PropDrilling />
      {/* if no props are passed defaultProps will be assigned */}
    </div>
    // <AppContext>
    //   <Navbar />
    // </AppContext>
  )
}

export default App
