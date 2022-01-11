import html from "@html/components/card.html";
import data from "../../data/pokemon_6.json";

function card() {
  return html.format({
    img: data.sprites.other["official-artwork"].front_default,
    name: data.name,
    id: data.id,
    type1: data.types[0].type.name,
    type2: data.types[1].type.name,
  });
}

export default card;
