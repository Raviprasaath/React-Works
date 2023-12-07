import { useEffect, useState } from "react";
import lodash from "lodash";

const INITIAL_API = "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1";

const getPokemons = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// paginated query

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  console.log("answer", lodash.capitalize("FRED"));

  useEffect(() => {
    getPokemons(INITIAL_API).then((data) => {
      setPokemons(data);
    });
  }, []);

  const showMore = async () => {
    const nextApiUrl = pokemons.at(-1).next;
    const data = await getPokemons(nextApiUrl);
    setPokemons((prev) => [...prev, ...data]);
  };

  if (pokemons.length === 0) {
    return <h1>No pokemons yet </h1>;
  }

  const pokemonList = pokemons.map((pokemon) => pokemon.results).flat();
  const hasMore = !!pokemons.at(-1).next;

  return (
    <div className="App">
      {pokemonList.map((pokemon, index) => (
        <h3 key={index}>{pokemon.name}</h3>
      ))}
      {hasMore && <button onClick={showMore}>Show more</button>}
    </div>
  );
}
