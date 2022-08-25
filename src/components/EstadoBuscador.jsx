import React from 'react'
import '../styles/estadoBuscador.css'

const EstadoBuscador = ({estado}) => {

    const display = () => {
        switch (estado) {
            case 'hide':
                return <p></p>

            case 'server-error':
                return <p>Necesita desplegar el servidor backend en local 💻 <br/> <a target="_blank" rel="noopener noreferrer" href="https://github.com/nicostray/patentes-backend">Repositorio</a></p>
            case 'bad-input':
                return <p>Ingrese los datos correctamente ❌</p>

            case 'buscando':
                return <p>Buscando datos ⏳</p>
            
            case 'encontrado':
                return <p>Datos encontrados ✔️</p>
            
            case 'limit':
                return <p>Debe esperar unos minutos para seguir buscando 🕒</p>

            case 'error':
                return <p>Datos no encontrados ❌</p>

            default:
                return <p>Error desconocido ❌</p>
        }
    }
  return (
    <div className='estadoBuscador'>
        {display(estado)}
    </div>
  )
}

export default EstadoBuscador