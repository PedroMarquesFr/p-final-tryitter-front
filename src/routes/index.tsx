import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";


function RoutesTryitter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        {/* <Route exact path="/bebidas" component={ Bebidas } /> */}
        {/* <Route exact path="/explorar" component={ Explorar } />
        <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
        <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExplorarComidasIngredientes }
        />
        <Route
          exact
          path="/explorar/comidas/area"
          component={ ExplorarAreaComidas }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExplorarBebidasIngredientes }
        /> */}
        {/* <Route exact path="/perfil" component={ Perfil } />
        <Route exact path="/:route/:id" component={ ComidasID } />
        <Route exact path="/comidas/:id/in-progress" component={ EmProgresso } />
        <Route exact path="/bebidas/:id/in-progress" component={ EmProgresso } />
        <Route exact path="/receitas-favoritas" component={ ReceitasFavoritas } />
        <Route exact path="/receitas-feitas" component={ ReceitasFeitas } /> */}
        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesTryitter;
