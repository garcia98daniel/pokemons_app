import React, { useState } from 'react';
import './styles/home.css'
import PokemonCard from "../components/PokemonCard"
import axios from 'axios';
import { useEffect } from 'react';

function Home() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=100`)
        .then(res => {
            const data = res.data.results;
            // console.log(data);
            setPokemons(data);
        })
    },[])

    return (
        <div className="pokemons_container">
            {pokemons.length > 0 && 
            pokemons.map((element, index)=>
            <PokemonCard key={index} name={element.name} url={element.url}/>)}
        </div>
    );
}

export default Home;