
 function PokemonCard ({pokemon}) {
  console.log(pokemon)

  // const pokemon =  {name: "meow"}

  return (
    
    <figure>
      {pokemon.imgSrc? <img src={pokemon.imgSrc} alt="Bulbasaur pokemon" />: <p>???</p>}
      <figcaption>Bulbasaur</figcaption>

    </figure>
    
  );
}




export default PokemonCard