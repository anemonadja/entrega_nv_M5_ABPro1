import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Doctores from './views/Doctores';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>

      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/doctores" element={<Doctores/>} />
      </Routes>


    </Router>
  )
}

export default App
