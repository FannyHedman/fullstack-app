import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
import Profile from "./pages/profile"
import Chat from "./pages/Chat";


function App() {
  return (

    <div className="app">
    <BrowserRouter>
    <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/profile/:id" element ={<Profile />} />
        <Route path="/profile/:id/messages" element ={<Chat />} />

    </Routes>
    </BrowserRouter>
</div>
  )
}

export default App
