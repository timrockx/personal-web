import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Education from './components/Education/Education';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Menu/><About/></>} />
          <Route path="/education" element={<><Menu/><Education/></>} />
        </Routes>
      </BrowserRouter>
    </div>



   

    
    
  );
}

export default App;
