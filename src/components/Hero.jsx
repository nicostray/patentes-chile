import React, { useRef, useState } from 'react'
import api from '../Api/api';
import '../styles/hero.css'
import EstadoBuscador from './EstadoBuscador';

const Hero = ({setToggleResultado, toggleResultado, setDatosPatente, scrollDownPage}) => {

  const [respuestaServer,setRespuestaServer] = useState('hide')
  const [valorInput,setValorInput] = useState('')
  const heroContainer = useRef('null')
  const inputText = useRef('null')

  const consultarPatente = async () => {
    if(verificarPatente()){
    setRespuestaServer('buscando')
    const respuesta = await api(valorInput)
      console.log(respuesta.status)
    if(respuesta.status === 200){
    setDatosPatente(respuesta.data)
    setToggleResultado(true)
    setRespuestaServer('encontrado')
    setTimeout(() => {
      scrollDownPage(heroContainer.current.clientHeight)
    }, 1000)

    }else if(respuesta.response.status === 400){
      setRespuestaServer('error')
    }else if(respuesta.response.status === 429){
      setRespuestaServer('limit')
    }else if(!respuesta.status){
      setRespuestaServer('server-error')
    }else{
      setRespuestaServer('error desconocido')
    }
  }
  }

  const verificarPatente = (valor) => {
    if (valorInput.trim().length === 6){
      return true
    }else{
      setRespuestaServer('bad-input')
      return false
    }
  }
  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      consultarPatente()
    }
  }

  const eliminarTexto = () => {
    inputText.current.value = ''
    setValorInput('')
  }


  return (
    <div ref={heroContainer} className={toggleResultado ? 'hero__container-mini' : 'hero__container-normal'}>
        <div className='hero'>
        <h1>Buscador de patentes vehiculares Chile</h1>

        <div className='hero__buscadorContainer'>
          <div className='hero__buscador'>
              <input ref={inputText} type='text' maxLength={6} placeholder='Patente' onKeyPress={handleKeyPress} onChange={(e) => setValorInput(e.target.value)}></input>
              <button className='hero__buscar' onClick={consultarPatente} aria-label='buscar'><i className="fa-solid fa-magnifying-glass"></i></button>
              {valorInput.length>0 && <button className='hero__borrar' onClick={eliminarTexto} aria-label='eliminar busqueda'><i className="fa-solid fa-xmark"></i></button>}
          </div>
          <EstadoBuscador estado={respuestaServer} />
        </div>
    </div>
    </div>
  )
}

export default Hero