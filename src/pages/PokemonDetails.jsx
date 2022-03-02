import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import './styles/PokemonDetails.css';

function PokemonDetails(props) {
    const { id } = useParams();

    const [totalPokemonInfo, setTotalPokemonInfo] = useState({
    id: null,
    img: "",
    abilities: "",
    // masinfo,
    // masinfo,
    // masinfo,
  });


  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => {
        const data = res.data;
        console.log(data);
        setTotalPokemonInfo({
            id: data.id,
            name: data.name,
          img: data.sprites.other.dream_world.front_default,
          abilities: data.abilities
        });
    })  
  },[])


    return (
        <div className="pokemonDetails">
            <img className="pokemon_img" src={totalPokemonInfo.img} alt="pokemon.png" />
            <section className="details">
                <div className="row name">
                    <h1>{totalPokemonInfo.name}</h1>
                </div>
                <div className="row ">
                    <h1>abilidades</h1>
                </div>
                <div className="row">
                    <h2>
                    {totalPokemonInfo.abilities.length > 0 && 
                        totalPokemonInfo.abilities.map((ability)=>{
                            return(
                                <ul>
                                    <li>
                                        {ability.ability.name}
                                    </li>
                                    {/* {ability.slot} */}
                                </ul>
                            )
                        })
                    }
                    </h2>

                </div>
            </section>
        </div>
    );
}

export default PokemonDetails;