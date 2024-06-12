import PokemonCard from './components/PokemonCard'

import './App.css'

function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: 
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },
    {
      name: "meow",
      imgSrc: ""
    },
  ];

  return (
    <>
    <PokemonCard pokemon={pokemonList[0]}></PokemonCard>
    <PokemonCard pokemon={pokemonList[1]}></PokemonCard>
     
    </>
  )
}

export default App
