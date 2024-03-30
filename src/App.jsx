import { useState } from 'react'
import phLogo from './assets/icon.jpg'
import Product from './components/Product'
import Form from './components/Form'
import './App.css'

function App() {
  /* const [count, setCount] = useState(0) */

  return (
    <>
      <div>
        <h1>
          P&H
        </h1>
        <img src={phLogo} alt="Logo" className='logo' />
      </div>
      <button className='info'>Más información</button>
      {/* <h1>Vite + React</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <h1>
        VAMO A DARLE
      </h1> */}
      <h2>
        ¿Quiénes somos?
      </h2>
      <p>
        Somos los mejores en nuestro campo, y todo gracias a las increíbles relaciones que hemos establecido con nuestros clientes.
        A diferencia de nuestros competidores, invertimos en desarrollar una conexión personal con todos y cada uno de nuestros clientes, brindándoles
        un servicio de calidad y estando disponibles las 24 horas de día, los 7 días de la semana. Póngase en contacto con nosotros
        cuando esté listo para obtener más información; ¡Estamos ansiosos por conocerte!
      </p>
      <h2>
        Galería
      </h2>
      <div>
        <Product/>
      </div>
      <h2>Contáctanos</h2>
      <p>
        ¡Estamos aquí para ayudar! Envíenos cualquier pregunta que tenga. Esperamos con interés escuchar de usted.
      </p>
      <Form/>
    </>
  )
}

export default App
