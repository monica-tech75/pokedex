import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const pokemonList = [
    {
      name: 'bulbasaur',
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      name: 'charmander',
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    },
    {
      name: 'squirtle',
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    },
    {
      name: 'pikachu',
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    },
    {
      name: 'mew',
    },
  ];

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
  };
  useEffect(() => {
    console.log('Hello pokemon trainer :)');
  }, []);
  return (
    <>
      <NavBar
        handlePokemonSelect={handlePokemonSelect}
        pokemonList={pokemonList}
      />
      {selectedPokemon && <PokemonCard pokemon={selectedPokemon} />}
    </>
  );
}

export default App;
