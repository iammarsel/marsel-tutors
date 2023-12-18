import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import Navbar from './components/Navbar'
import Home from './components/Home'
import Chess from './components/Chess'
import Register from './components/Register'
function App() {

  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element ={ <Home/> }/>
          <Route path="/chess" element ={ <Chess/>}/>
          <Route path="/register" element ={ <Register/>}/>
          {
            /*
          <Route path="/computer-science" element ={ <ComputerScience/>}/>
          <Route path="/data-structures" element ={ <DataStruct/>}/>
          <Route path="/web-development" element ={ <WebDev/>}/>
          <Route path="/game-development" element ={ <GameDev/>}/>
            */
          }
      </Routes>
    </Router>
    </>
  )
}

export default App
