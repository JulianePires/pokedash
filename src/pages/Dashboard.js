import React, { useState, useEffect } from 'react';
import axios from 'axios';
import pokeball from '../images/pokeball.png';

const Dashboard = () => {
  const [ pokemons, setPokemons ] = useState([]); //USE STATE PARA PEGAR OS POKEMONS
  const URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  const END = '.png';
  
  useEffect(() => {
    async function loadPokemons() {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
      setPokemons(data.results);
    };
    
    
    loadPokemons();
  }, []);

  return ( 
    <>
      <div className="container-fluid mx-auto row">
      {
        pokemons.map( (pokemon, index) => (
          <div id="cartao" className="card container-fluid col-sm-3" key={index}>
            <span><img src={ pokeball } id='pokebola' className="img-fluid d-block mx-auto" alt='pokebola'/></span>
            <span><img src={ `${ URL }${ index+1 }${ END }` } className="img-fluid d-block mx-auto efeito-grow" id='pokemon' alt='pokemon' /></span>
            <div className="card-body d-block mx-auto">
              <p className="card-text">{ pokemon.name }</p>
            </div>
          </div>
        ))
      }
      </div>
    </>
  );

};

export default Dashboard;
