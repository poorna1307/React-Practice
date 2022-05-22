import {Route,Routes,Link} from 'react-router-dom' 
import Home from './components/Home'
import User from './components/User'
import Technologies from './components/Technologies'
import Contactus from './components/Contactus'
import HTML from './components/HTML'
import JavaScript from './components/JavaScript'
function App() {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand ms-5" >ReactTwo</a>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto me-5">
      <li className="nav-item active">
        <Link className="nav-link" to="">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="user">User</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="technologies">Technologies</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='contactus'>Contactus</Link>
      </li>
    </ul>
  </div>
</nav>

      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='user' element={<User/>}></Route>
        <Route path='technologies' element={<Technologies/>}>
          <Route path='' element={<HTML/>}></Route>
          <Route path='JavaScript' element={<JavaScript/>}></Route>
        </Route>
        <Route path='contactus' element={<Contactus/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
