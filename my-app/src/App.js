import logo from './logo.svg';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes,NavLink } from 'react-router-dom';



import './App.css';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null);
  //ModeToggle
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null)
    }, 1800);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
  <Router>
  <div className="container">
    <Navbar mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <Routes>
      <Route  exact path="/about" element={<About />} />
      <Route exact path="/" element={<Textform showAlert={showAlert} heading="Email Entering" mode={mode} />} />
    </Routes>
  </div>
</Router>


    </>
  );
}

export default App;
