import React, {Fragment} from 'react';

import Footer from './Footer'

import './main.css';

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
      <section className="agenda">
          <figure id="mapa">
              <img src="./images/mapa.PNG" alt="mapa"/>
          </figure>
          <form action="">Opciones</form>
          <button>¡Agenda ahora!</button>
      </section>
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
<<<<<<< HEAD
      </section>    
      </Fragment>
      <Fragment>
=======
      </section>
>>>>>>> f3a1452c9b634e79c89534e0a310369b79149fb0
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
<<<<<<< HEAD
      </Fragment>
      
      <Fragment>
      <footer>
          <div>
              <p><img src="./images/logo_hb-02.png" alt="logoHealthyBreak" height="60px" />Bienestar a tu alcance </p>
          </div>
          <div>
              <p>Designed Healthy Braek, 2020</p>
          </div>
      </footer>
=======

      <Footer />
>>>>>>> f3a1452c9b634e79c89534e0a310369b79149fb0
    </Fragment>
  );
}

export default App;
