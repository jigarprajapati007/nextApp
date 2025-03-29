import { Pokemon } from "@/component/Pokemon";

export default function PokemonDetail({ params }: { params: { id: string } }) {
    return (
        <Pokemon id={params.id}/>
    );
  }