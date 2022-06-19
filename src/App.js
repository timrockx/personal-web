import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Background from './components/Background/Background';
import Test from './components/Portfolio/Test';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><About/><Menu/></>} />
          <Route path="/background" element={<><Background/><Menu/></>} />
          <Route path="/projects" element={<><Test/><Menu/></>} />
        </Routes>
      </BrowserRouter>
    </div>



   

    
    
  );
}

export default App;
