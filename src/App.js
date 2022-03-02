import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails'

import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
// import Formulario from './componets/Formulario';

function App() {

  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pokemon/:id" element={<PokemonDetails/>} />
    </Routes>
  );
}

export default App;
