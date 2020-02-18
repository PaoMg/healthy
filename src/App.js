import React, {Fragment} from 'react';

// Verifiquen, después de insertar el router, qué componentes ya no se necesitan aquí
// TIP TIP TIP
// Su terminal les dirá cuáles elementos no se necesitan


import SeccionAgenda from './SeccionAgenda';
import Footer from './Footer'
import AgendarCita from './AgendarCita'
import MainView from './MainView'

import './main.css';

// HAy que cambiar a MainView lo que este componente pinta en el navegador 
// y sustituirlo por el router y sus elementos

function App() {
  return (
    <Fragment>
      <header className="header">
        <figure className="logo">
            <img src="./images/logo_hb-01.png" alt="LogoHealthyBreak" />
        </figure>
        <p className="titleHealthy">Healthy Break</p>
        <div id="relleno"></div>
        <nav className="menu">
            <ol>
                <li>
                    <a href="#nosotros">Nosotros</a>
                </li>
                <li>
                    <a href="#servicios">Servicios</a>
                </li>
                <li>
                    <a href="//">Iniciar Sesión</a>
                </li>
            </ol>
        </nav>
      </header>
      <section className="hero">
          <h1>¡Que la oficina no te impida<br/>ser <strong>saludable</strong>!</h1>
          <h2>Vamos hacia ti, encuentra tu plan saludable <br/> muy cerca de tu oficina.</h2>
          <div>
              <button>¡Agenda ahora!</button>
          </div>
      </section>

        <SeccionAgenda />
        
      <section id="nosotros" className="aboutUs">
          <article>
              <h2>¿Quiénes somos?</h2>
              <p>Somos una empresa dedicada al bienestar, sabemos lo dificil que es el ritmo de vida en las grandes ciudades y por ello lo difícil que es encontrar un espacio de tiempo para cuidar nuestra salud, así que ponemos a tu disposición consultas nutricionales en una unidad móvil que estará tan cerca de tu oficina que solo invertiras 20 minutos de tu día en ella con beneficios para toda la vida.</p>
              <p>Te ayudamos a cumplir la  meta que te has propuesto; bajar de peso, ganar masa múscular, tonificar tu cuerpo, perder tallas, siempre de una manera saludable y responsable. Para nosotros lo mas importante es que logres un equilibrio entre tu día a día y un cuerpo saludable.</p>
          </article>
      </section>
      <section id="servicios">
          <h2>Nuestros servicios</h2>
          <div id="contenedor-servicios">
              <div className="service">
                    <img src="./images/iconos-servicios-nutriologo.svg" alt="nutriologo"/>
                    <h5>Nutriologo cretificado, deja tu salud en manos de un profesional.</h5>
              </div>
              <div className="service">
                  <img src="./images/iconos-servicios-movil.svg" alt="movil"/>
                  <h5>Siempre cerca de ti para que tengas tiempo de asistir.</h5>
              </div>
              <div className="service">
                  <img src="./images/iconos-servicios-seguimiento.svg" alt="seguimiento"/>
                  <h5>Seguimiento y apoyo para que logres tus metas.</h5>
              </div>
              <div className="service">
                  <img src="./images/iconos-servicios-dieta.svg" alt="planes de alimentacion"/>
                  <h5>Productos y planes de alimentación a tu medida.</h5>
              </div>
          </div>
      </section>
      <section className="opinions">
          <div className="testimony">
              <img src="" alt="testimonio1"/>
              <h5>¡Excelente servicio, me senti comoda en todo momento!</h5>
          </div>
          <div className="testimony">
              <img src="" alt="testimonio2"/>
              <h5>Recomendable 100% rutinas muy fáciles de llevar.</h5>
          </div>
          <div className="testimony">
              <img src="" alt="testimonio3"/>
              <h5>Me encantó, muy buen trato y muy buenas recetas.</h5>
          </div>
          <div>
              <button>¡Conoce más!</button>
          </div>
      </section>

      <Footer />
    </Fragment>
  );
}

export default App;
