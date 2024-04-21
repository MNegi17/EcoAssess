import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import Main from './components/Main'
import Service from './components/Service'
import About from './components/About'
function App() {

  return (
    <div>
     <Router>
    <Routes>
      <Route exact path='/' element={<Main/>}/>
      <Route exact path='/Services' element={<Service/>}/>
      <Route exact path='/AboutUs' element={<About/>  }/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
