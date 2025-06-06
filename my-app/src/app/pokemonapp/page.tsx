import { PokemonListComponent } from "@/component/PokemonListComponent";
import React from "react";

async function getPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=100", {
    cache: "no-store", // Always fetch fresh data
  });
  let pokemonList = await res.json();
  let data = await Promise.allSettled(
    pokemonList?.results?.map(async (pokemon: any) => {
      const detailsResponse = await fetch(pokemon.url, {
        cache: "no-store", // Always fetch fresh data
      });
      const details: any = await detailsResponse.json();
      return {
        name: pokemon.name as string,
        image: (await details?.sprites?.front_default) as string,
        id: await details?.id,
      };
    })
  );
  return data;
}

export const page = async () => {
  const pokemonList: any = await getPokemon();
  return <PokemonListComponent pokemonList={pokemonList} />;
};
export default page;
