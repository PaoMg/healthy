import React from 'react'
import Mapa from './images/mapa.PNG'

const SeccionAgenda = () => {
  return (
    <>
      <section className="agenda">
        <figure id="mapa">
            <img src={Mapa} alt="mapa"/>
        </figure>
        <button onClick={() => {}}>¡Agenda ahora!</button>
      </section>
    </>
  )
}

export default SeccionAgenda