/* eslint-disable react/prop-types */
function NavBar({ handlePokemonSelect, pokemonList }) {
  return (
    <>
      {pokemonList.map((pokemon) => (
        <button
          key={pokemon.name}
          onClick={() => handlePokemonSelect(pokemon)}>
          {pokemon.name}
        </button>
      ))}
    </>
  );
}
export default NavBar;
