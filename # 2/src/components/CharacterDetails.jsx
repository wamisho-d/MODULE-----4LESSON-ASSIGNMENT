import React from "react";
import { useParams } from "react-router-dom";

const characters = {
  1: { name: "Spider-Man", description: "A superhero with spider-like abilities." },
  2: { name: "Iron Man", description: "A genius billionaire in a high-tech suit of armor." },
  3: { name: "Thor", description: "The Norse God of Thunder wielding the mighty Mjolnir." },
};

const CharacterDetails = () => {
  const { id } = useParams();
  const character = characters[id];

  if (!character) {
    return <h2>Character not found</h2>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <p>{character.description}</p>
    </div>
  );
};

export default CharacterDetails;
