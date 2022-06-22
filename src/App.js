import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Background from './components/Background/Background';

function App() {

  useEffect(() => {
    document.title = "Timothy Lee"
  }, [])

  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><About/><Menu/></>} />
          <Route path="/background" element={<><Background/><Menu/></>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
