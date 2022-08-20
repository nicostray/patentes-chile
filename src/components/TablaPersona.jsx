import React from 'react'
import '../styles/tabla.css'
const TablaPersona = ({datos}) => {


  return (
    <table className="tablaPersona">
        <thead>
          <tr>
              <th colSpan={2}>Información del propietario</th>
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

export default TablaPersona