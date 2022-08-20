import { useRef, useState } from "react";
import './App.css'
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Resultados from "./components/Resultados";
import Footer from "./components/Footer";
import ButtonUp from "./components/ButtonUp";

function App() {

  const [toggleResultado,setToggleResultado] = useState(false)
  const [positionY,setPositionY] = useState(0)
  const [datosPatente,setDatosPatente] = useState()
  const pagina = useRef(null)


  const getPosition = () => {
    setPositionY(pagina.current.scrollTop)
  }

  const scrollButton = () => {
    pagina.current.scrollBy({
      top: positionY*-1,
      behavior:'smooth'
    })
  }

  const scrollDownPage = (tamano) => {
    pagina.current.scrollBy({
      top: tamano,
      behavior:'smooth'
    })
  }

  return (
    <div ref={pagina} className='fondo' onScroll={getPosition}>
        <Navbar />
        <Hero toggleResultado={toggleResultado} setToggleResultado={setToggleResultado} setDatosPatente={setDatosPatente} scrollDownPage={scrollDownPage}/>

        {toggleResultado &&
          <div>
            <main className="contenido">
              <Resultados datosPatente={datosPatente}/>
            </main>

            <Footer />

            <ButtonUp positionY={positionY} scrollButton={scrollButton} />
          </div>
        }
        
    </div>
  );
}

export default App;
