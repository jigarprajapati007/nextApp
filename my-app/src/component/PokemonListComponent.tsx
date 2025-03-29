"use client";
import React, { ChangeEvent, useState } from "react";

import Link from "next/link";
export const PokemonListComponent = ({ pokemonList }: any) => {
  const [pokemonData, setPokemonData] =
    useState<{ value: { id: number; image: string; name: string } }[]>(
      pokemonList
    );
  const [pokemonDataselect, setPokemonDataselect] =
    useState<{ value: { id: number; image: string; name: string } }[]>(
      pokemonList
    );
  const [pokemon, setPokemon] = useState<string>("");
  const [pokemonSel, setPokemonSel] = useState<string>();

  //handling select event
  const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value.toLowerCase() !== "select(all)") {
      let newFilteredData = pokemonDataselect;
      newFilteredData = newFilteredData?.filter(
        (item) =>
          item.value.name.toLowerCase() === event.target.value.toLowerCase()
      );
      setPokemonData(newFilteredData);
      setPokemonSel(event.target.value);
    } else {
      setPokemonData(pokemonDataselect);
      setPokemonSel(event.target.value);
    }
  };

  //handling search event
  const handleChangeSerach = (event: ChangeEvent<HTMLInputElement>) => {
    setPokemon(event.target.value.toLowerCase());
  };

  //handling click event
  const clickEventHandle = () => {
    if (pokemon) {
      let newFilteredData = pokemonDataselect;
      newFilteredData = newFilteredData?.filter((item) =>
        item.value.name.toLowerCase().includes(pokemon)
      );
      setPokemonData(newFilteredData);
    } else {
      setPokemonData(pokemonDataselect);
      setPokemon("");
    }
  };

  //handling reset click event
  const clickEventHandleReset = () => {
    setPokemonData(pokemonDataselect);
    setPokemon("");
    setPokemonSel("");
  };

  return (
    <div className="bg-[#e7e7e7]">
      <div className="container mx-auto px-4 py-8">
        <div className=" max-w-md px-4">
          <div className="flex-col sm:flex-row  gap-2  p-4 rounded-lg">
            <select
              id="categorySelect"
              value={pokemonSel}
              onChange={(event) => handleChangeSelect(event)}
              className="!w-70 h-12 bg-white mb-5 sm:w-auto px-3 py-2 border rounded-md text-gray-700"
            >
              <option>Select(All)</option>
              {pokemonDataselect?.map((item, index) => {
                return (
                  <option key={index} value={item.value.name}>
                    {item.value.name}
                  </option>
                );
              })}
            </select>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <input
                id="nameInput"
                value={pokemon}
                type="text"
                onChange={(event) => handleChangeSerach(event)}
                placeholder="Search..."
                className=" flex-1 h-12 bg-white border-none px-3 py-2 border rounded-md rounded-tr-none rounded-br-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="px-4 py-2 h-12 bg-[#1D4CA2] rounded-tl-none rounded-bl-none  text-white rounded-md  transition duration-300"
                onClick={clickEventHandle}
              >
                Search
              </button>
            </div>

            <button
              className="mt-10 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              onClick={clickEventHandleReset}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="mt-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pokemonData && pokemonData?.length > 0 ? (
            pokemonData?.map(
              (
                item: { value: { id: number; image: string; name: string } },
                index: number
              ) => (
                <Link
                  key={index}
                  href={`/pokemonapp/${item.value.id}`}
                  className="cursor-pointer h-100 bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition duration-300"
                >
                  <img
                    src={item.value.image}
                    alt={item.value.name}
                    className="w-200 h-50 mx-auto object-contain"
                  />
                  <h3 className="mt-20 text-justify text-lg font-semibold">
                    {item.value.name}
                  </h3>
                  <p className="text-justify mt-10 text-[#3877C4]"> {"Details →"}</p>
                </Link>
              )
            )
          ) : (
            <h3>No data found.</h3>
          )}
        </div>
      </div>
    </div>
  );
};
