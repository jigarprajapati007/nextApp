"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useApiCall } from "@/hooks/useApiCall";
export const Pokemon = ({ id }: any) => {
  const [detailPokemon, setDetailPokemon] = useState<any>({});
  const { data } = useApiCall("https://pokeapi.co/api/v2/pokemon/" + id);
  console.log("faran", data);
  useEffect(() => setDetailPokemon(data), [data]);
  return (
    <div className="bg-[#e7e7e7]" suppressHydrationWarning>
      <div className="container w-500 bg-[#e7e7e7] mx-auto px-4 py-8">
        <nav suppressHydrationWarning className="text-gray-600 text-sm m-10 text-green-600">
          <ol className="flex space-x-2">
            <li>
              <Link href="/" className="text-green-600 hover:underline">
                {"⮜ Back"}
              </Link>
            </li>
            <li>/</li>
            <li>
              <p className="cursor-pointer text-green-600 hover:underline">
                {detailPokemon?.name}
              </p>
            </li>
            <li>/</li>
            <li className="text-gray-800 font-semibold">{detailPokemon?.id}</li>
          </ol>
        </nav>
        <div className="felx sm:flex-col w-100 mx-auto">
          <div
            style={{ cursor: "pointer" }}
            className=" p-4 text-center transition duration-300"
          >
            <img
              src={detailPokemon?.sprites?.front_default}
              className="w-200 rounded-lg rounded-bl-none rounded-br-none  h-50 mx-auto object-contain bg-[#74E3DC]"
            />
            <div className="bg-[#EDECA1] rounded-tl-none rounded-tr-none   p-10 rounded-lg">
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                }}
              >
                <h3 className="mt-2  text-lg font-semibold">Name: </h3>
                <p style={{ marginLeft: 5 }}>{detailPokemon?.name}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                }}
              >
                <h3
                  className="mt-2 text-lg font-semibold"
                  style={{ marginRight: 5 }}
                >
                  Type:{" "}
                </h3>
                {detailPokemon?.types?.map((type: any, index: number) => (
                  <p key={index}>{type.type.name + ", "}</p>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                }}
              >
                <h3
                  className="mt-2 text-lg font-semibold"
                  style={{ marginRight: 5 }}
                >
                  Stats:{" "}
                </h3>
                {detailPokemon?.stats?.map((val: any, index: number) => (
                  <p key={index}>{val.stat.name + ", "}</p>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                }}
              >
                <h3
                  className="mt-2 text-lg font-semibold"
                  style={{ marginRight: 5 }}
                >
                  Abilities:{" "}
                </h3>
                {detailPokemon?.abilities?.map((val: any, index: number) => (
                  <p key={index}>{val.ability.name + ", "}</p>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                }}
              >
                <h3
                  className="mt-2 text-lg font-semibold"
                  style={{ marginRight: 5 }}
                >
                  Some Moves:{" "}
                </h3>
                {detailPokemon?.moves?.map((val: any, index: number) => (
                  <p key={index}>{val.move.name + ", "}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
