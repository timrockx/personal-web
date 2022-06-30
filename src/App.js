import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Background from './components/Background/Background';

function App() {


  return (

    <div>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Timothy Lee</title>
      </Helmet>

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<><About/><Menu/></>} />
          <Route path="/background" element={<><Background/><Menu/></>} />
        </Routes>
      </BrowserRouter>
      
    </div>

  );
}

export default App;
