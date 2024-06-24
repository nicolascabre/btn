import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Nav from './components/layout/Nav' ;
import Footer from "./components/layout/Footer";

import Contactopage from "./pages/Contactopage";
import Homepage from "./pages/Homepage";
import Nosotrospage from "./pages/Nosotrospage";
import Novedadespage from "./pages/Novedadespage";

function App() {
  return (
    <div className="App">
      <  Header />
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path = "/" element ={<Homepage />}/>
          <Route path = "nosotros" element ={<Nosotrospage />}/>
          <Route path = "novedades" element ={<Novedadespage />}/>
          <Route path = "contacto" element ={<Contactopage />}/>

        </Routes>
     </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
