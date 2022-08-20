import React from 'react'
import '../styles/tabla.css'

const TablaVehiculo = ({datos}) => {
  return (
    <table className='tablaVehiculo'>
    <thead>
      <tr>
          <th colSpan={2}>Información del vehiculo</th>
      </tr>
    </thead>
    <tbody>
      {datos.map(dato => 
            <tr key={dato.propiedad}>
              <td style={{fontWeight:'600'}}>{dato.propiedad}</td>
              <td>{dato.valor}</td>
            </tr>
      )}
    </tbody>
</table>
  )
}

export default TablaVehiculo