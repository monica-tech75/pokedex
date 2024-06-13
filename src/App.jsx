import PokemonCard from './components/PokemonCard'


import './App.css'

function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: 
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      pokemonIndex: 1,
    },
    {
      name: "meow",
      imgSrc: ""
    },
    {
      name: "",
      imgSrc: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fc8.alamy.com%2Fcomp%2FH86XXY%2Fcute-fox-cartoon-H86XXY.jpg&tbnid=CFFibJBpp75c6M&vet=10CBUQxiAoBWoXChMIoKmFz9PYhgMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Fpokemon.html%3Fcutout%3D1&docid=KlSIF5fRpE-Q3M&w=1111&h=1390&itg=1&q=pokemon%20pictures&ved=0CBUQxiAoBWoXChMIoKmFz9PYhgMVAAAAAB0AAAAAEAc"
    }
  ];

  return (
    <>
    <PokemonCard pokemon={pokemonList[0]}></PokemonCard>
    <PokemonCard pokemon={pokemonList[1]}></PokemonCard>
    <PokemonCard pokemon={pokemonList[2]}></PokemonCard>
    
     
    </>
  )
}

export default App
