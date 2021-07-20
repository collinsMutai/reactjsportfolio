import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';


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
        shape:{
          type: "circle",
          stroke: {
            width: 6,
            color: "#ed1a4f"
          }
        }
      }
    }}
    />
    <Navbar />
    <Header />
   <About />
   <Services />
    </>
  );
}

export default App;
