import React from 'react'
import Mapa from './images/mapa.PNG'

const SeccionAgenda = () => {
  return (
    <>
      <section className="agenda">
        <figure id="mapa">
            <img src={Mapa} alt="mapa"/>
        </figure>
        {/* Aqui hay que sustituir por un Link, con la ruta "/agendar" */}
        <button onClick={() => {}}>¡Agenda ahora!</button>
      </section>
    </>
  )
}

export default SeccionAgenda