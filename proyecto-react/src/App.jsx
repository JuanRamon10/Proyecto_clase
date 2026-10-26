import React from 'react'
import Interprete from './Componentes/UT2/Practica203/Interprete.jsx';
import Contenedor1 from './Componentes/UT2/Practica203/Contenedor1.jsx';
import Pelicula from './Componentes/UT2/Practica203/Pelicula.jsx'
import ContadorLikes from './Componentes/UT3/UT03_useState/Practica 308/ContadorLikes.jsx';

function App() {

  return (
    <>
      <section id="center">{/*
          <h2>¡Hola, React ! </h2>
          <Contenedor1 
            descripcion="Esto es la descripcion" 

        >
          <p>Esto es el children de los huevos Ejercicio 1 hecho correctamente
           y estoy dentro del contenedor</p>

          <section id="center">
                  <h2>¡Hola, React! </h2>
                  <Interprete nombre="Nombre pelicula: La vanganza de Kirby" 
                  descripcion="Esto es la descripcion de la pelicula de kirby" 
                  imagen ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMX98Oq06Yz1Xz7JOjyQPKp2Wy7XN2H9b-_MzwHxz6w&s=10'
                    
                  >
                   <p> Esto es la biografia de la pelicula de kirby(children)</p>
                  </Interprete>
                </section>

        </Contenedor1>*/}


        <div className="">
          <ContadorLikes></ContadorLikes>



        </div>
      </section>


    </>
  );
}

export default App
