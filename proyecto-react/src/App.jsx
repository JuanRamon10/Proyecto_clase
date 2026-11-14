import React from 'react'
import Interprete from './Componentes/UT2/Practica203/Interprete.jsx';
import Contenedor1 from './Componentes/UT2/Practica203/Contenedor1.jsx';
import ContadorLikes from './Componentes/UT3/UT03_useState/Practica 308/ContadorLikes.jsx';
import ListadoPeliculas from "./Componentes/UT4/Practica 1/ListadoPeliculas.jsx"
import{peliculas} from "./Componentes/UT4/Practica 1/peliculas.json"
import ContadorLimite from './Componentes/UT3/UT03_useState/Practica 308/ContadorLimite.jsx';
import ListaMatriculas from './Componentes/UT3/UT03_useState/Practica 309/ListaMatriculas.jsx';
import {Route,Routes} from 'react-router-dom';
import Inicio from './Componentes/UT4/Paginas/Inicio';
import Contacto from './Componentes/UT4/Paginas/Contacto';
import Productos from './Componentes/UT4/Paginas/Productos.jsx';
import AcercaDe from './Componentes/UT4/Paginas/AcercaDe.jsx';
import Menu from './Componentes/UT4/Menu/Menu.jsx'
import Error from './Componentes/UT4/Paginas/Error.jsx';
function App() {

  return (
    <>
    <Menu/>  
    <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/productos' element={<Productos/>}></Route>
        <Route path='/acercade' element={<AcercaDe/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
        <Route path='*' element={<Error/>}></Route>

    </Routes>


    </>
  );
}

export default App
