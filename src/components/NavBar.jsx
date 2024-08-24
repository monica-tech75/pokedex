/* eslint-disable react/prop-types */
function NavBar({ handlePokemonSelect, pokemonList }) {
  const handlePokemon = (pokemon) => {
    if (pokemon.name === 'pikachu') {
      alert('pika pikachu !!!');
    }
    handlePokemonSelect(pokemon);
  };
  return (
    <>
      {pokemonList.map((pokemon) => (
        <button
          key={pokemon.name}
          onClick={() => handlePokemon(pokemon)}>
          {pokemon.name}
        </button>
      ))}
    </>
  );
}
export default NavBar;
