import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function PokemonCard({name, url}) {

  const [pokeInfo, setPokeInfo] = useState({
    id: null,
    img: "",
    abilities: 0,
  });


  useEffect(() => {
    axios.get(`${url}`)
    .then(res => {
        const data = res.data;
        // console.log(data);
        setPokeInfo({
          id: data.id,
          img: data.sprites.other.dream_world.front_default,
          abilities: data.abilities.length
        });
    })
  },[])

  return (
    <Card sx={{ width: 250, margin: "auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={pokeInfo.img}
          alt="pokemon.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Abilidades {pokeInfo.abilities}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/pokemon/${pokeInfo.id}`}>
          <Button size="small" color="primary">
            Ver detalles
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
