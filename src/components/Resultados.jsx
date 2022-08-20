import React from 'react'
import '../styles/resultados.css'
import TablaPersona from './TablaPersona'
import TablaVehiculo from './TablaVehiculo'

const Resultados = ({datosPatente}) => {
  return (
    <div className='resultados__container'>
      <div className='resultados'>
            <div className='resultados__titular'>
              <h2>Resultados</h2>
              <p>La dirección mostrada puede diferir de la actual del propietario, como la ubicación en el mapa podría ser incorrecta.</p>
            </div>
            <div className='resultados__propietario'>
              <TablaPersona datos={datosPatente.propietario}/>

                <div className='resultados__mapa'>
                  <iframe title='ubicación en google maps' src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.656889420601!2d-0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9664535f589788a5%3A0xa996d7e7524a0909!2s${datosPatente.propietario[3].valor} chile!5e0!3m2!1ses-419!2scl!4v1660502919176!5m2!1ses-419!2scl`} width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <TablaVehiculo datos={datosPatente.vehiculo} />
          </div>
    </div>
  )
}

export default Resultados