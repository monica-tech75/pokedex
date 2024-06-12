
import PropTypes from "prop-types"
 
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

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string
  })
}




export default PokemonCard