
import { Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Profile from './pages/profile'
import Nav from 'react-bootstrap/Nav'
import './App.css'
import { BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <div className="app">

<h1>hej</h1>
               <Nav>
                            <Link id="NavLink" to={'/'}>
                                Home
                            </Link>
                            <Link id="NavLink" to={'/profile'}>
                                Profile
                            </Link>

                        </Nav>


<BrowserRouter>

<Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/profile" element={<Profile />} />
</Routes>
</BrowserRouter>

    </div>
  )
}

export default App
