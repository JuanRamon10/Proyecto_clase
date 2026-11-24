import React from 'react'
import Interprete from './Componentes/UT2/Practica203/Interprete.jsx';
import Contenedor1 from './Componentes/UT2/Practica203/Contenedor1.jsx';
import ContadorLikes from './Componentes/UT3/UT03_useState/Practica 308/ContadorLikes.jsx';
import ListadoPeliculas from "./Componentes/UT4/Practica 1/ListadoPeliculas.jsx"
import {peliculas} from "./Componentes/UT4/Practica 1/peliculas.json"
import ContadorLimite from './Componentes/UT3/UT03_useState/Practica 308/ContadorLimite.jsx';
import ListaMatriculas from './Componentes/UT3/UT03_useState/Practica 309/ListaMatriculas.jsx';
import {Route,Routes} from 'react-router-dom';

import Error from './Componentes/UT4/Paginas/Error.jsx';
import Contenido from './Componentes/UT4/Componentes07/Estructura07/Contenido.jsx';
import Cabezera from './Componentes/UT4/Componentes07/Estructura07/Cabezera.jsx';
import Menu from './Componentes/UT4/Componentes07/Estructura07/Menu.jsx';
import Footer from './Componentes/UT4/Componentes07/Estructura07/Footer.jsx';
import Inicio from './Componentes/UT4/Componentes07/Paginas07/Inicio.jsx';
import Galeria from './Componentes/UT4/Componentes07/Paginas07/Galeria.jsx';
import Interpretes from './Componentes/UT4/Componentes07/Paginas07/Interpretes.jsx';
import AcercaDe from './Componentes/UT4/Componentes07/Paginas07/AcercaDe.jsx';
import Peliculas from './Componentes/UT4/Componentes07/Paginas07/Peliculas.jsx';
import PeliculaDetalle from './Componentes/UT4/Componentes07/Paginas07/PeliculaDetalle.jsx'
import FiltroDirector from './Componentes/UT4/Componentes07/Paginas07/Filtros/FiltroDirector.jsx';
import FiltroInterprete from './Componentes/UT4/Componentes07/Paginas07/Filtros/FiltroInterprete.jsx';
import FiltroTitulo from './Componentes/UT4/Componentes07/Paginas07/Filtros/FiltroTitulo.jsx';
function App() {

  return (
    /*<>
    <Menu/>  
    <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/productos' element={<Productos/>}></Route>
        <Route path='/acercade' element={<AcercaDe/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
        <Route path='*' element={<Error/>}></Route>

    </Routes>


    </> children son los hijo de contenido en este caso Routes*/
  <>
    <Cabezera/>
    <Menu/>
    <Contenido>
      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/galeria" element={<Galeria/>}>
          <Route path='director' element={<FiltroDirector/>}></Route>
          <Route path='interprete' element={<FiltroInterprete/>}></Route>
          <Route path='titulo' element={<FiltroTitulo/>}></Route>
        </Route>
        <Route path="/interpretes" element={<Interpretes/>}></Route>
        <Route path="/acercade" element={<AcercaDe/>}></Route>
        <Route path="/peliculas" element={<Peliculas valor={peliculas}/>}>
          <Route path="/peliculas/:id" element={<PeliculaDetalle valor={peliculas}/>}></Route>
        </Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </Contenido>
    <Footer/>

  </>
  );
  
}

export default App
