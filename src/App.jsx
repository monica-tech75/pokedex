import PokemonCard from './components/PokemonCard'


import './App.css'
import { useState } from 'react';

function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

    const [pokemonIndex, setPokemonIndex] = useState(0);

    const handleNextClick = () => {
      if (pokemonIndex < pokemonList.length -1) {
        setPokemonIndex(pokemonIndex + 1)
      }
    }

    const handlePreviusClick = () => {
      if (pokemonIndex > 0) {
        setPokemonIndex(pokemonIndex - 1)
      }
    }

  

  return (
    <>
    <PokemonCard pokemon={pokemonList[pokemonIndex]}></PokemonCard>
    
    <button onClick={handleNextClick}>Next</button>
    <button onClick={handlePreviusClick}>Previus</button>
     
    </>
  )
}

export default App
