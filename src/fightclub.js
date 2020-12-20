import React, {useState, useEffect} from 'react';
import {Switch, Case, Default} from 'react-if'
import Start from './start.js';
import Vs from './vs.js';
import Winner from './winner.js';

import axios from 'axios';

function Fightclub() {

  const [pokemon, setPokemon] = useState({});
  const [winning, setWinning] = useState(false);
  const [pokeWinner, setPokeWinner] = useState({});

  async function getPokemon() {
    try {

    let idOne = Math.floor(Math.random() * 150) + 1;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idOne}`);
    const results = response.data;

    let idTwo = Math.floor(Math.random() * 150) + 1;
    const responseTwo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idTwo}`)
    const resultsTwo = responseTwo.data;
    setPokemon({p1: results, 
                p2: resultsTwo});

    }
    catch(err) {
      console.warn(err.message);
    };
  };

  function getWinner(data) {
    if(data.img && data.name) {
      setWinning(true);
      setPokeWinner(data)
    }
  };

  return (
    <>
      <Switch>
        <Case condition={!pokemon.p1 && !pokemon.p2}>
          <Start get={getPokemon} />
        </Case>
        <Case condition={pokemon.p1 && pokemon.p2 && winning === false}>
          <Vs pokemon={pokemon} getWinner={getWinner} />
        </Case>
        <Case condition={winning === true}>
          <Winner data={pokeWinner}/>
        </Case>
      </Switch>
    </>
  );

};

export default Fightclub;