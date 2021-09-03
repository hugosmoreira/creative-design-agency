import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';



function App() {
  return (
    <>
      <Particles 
        className="particles-canvas"
       params={{
         particles: {
           number: {
             value: 30,
             density: {
               enable: true,
               value_area: 900
             }
           },
           shape: {
             type: "square",
             stroke: {
               width: 6,
               color: "#0598ce"
             }
           }
         }
       }}
      />
      <Navbar />
      <Header />
      <AboutMe />
    </>
  );
}

export default App;
