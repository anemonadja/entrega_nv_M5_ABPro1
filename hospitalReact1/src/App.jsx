import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Doctores from './views/Doctores';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarReact from './components/Navbar';


function App() {

  return (
    <Router>
      <NavbarReact />
      <Routes>
        <Route path="/home" element={ <Home/> } />
        <Route path="/doctores" element={<Doctores/>} />
      </Routes>


    </Router>
  )
}

export default App
