import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
import Profile from "./pages/profile"


function App() {
  return (

    <div className="app">
    <BrowserRouter>
    <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/profile/:id" element ={<Profile/>} />
    </Routes>
    </BrowserRouter>
</div>
  )
}

export default App
