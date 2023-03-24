
import './App.css'
import Login from './Pages/Login'
import Home from './Pages/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Details from './Pages/Details';
import Navbar from './Components/Navbar';

function App() {


  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/auth" element ={<Login />} />
        </Routes>
      </Router>

     
    </div>
  );
}

export default App
