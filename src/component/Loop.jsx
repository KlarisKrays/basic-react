import { useState } from "react";
import Button from "./Button";

const pets = ["hewan1", "hewan2", "Hewan3", "Hewan4"];

const Loop = () => {
  const [input, setInput] = useState("");
  const [myPets, setMyPets] = useState(pets);

  const addNewPet = () => {
    setMyPets([...myPets, input]);
  };

  return (
    <div className="container">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Input New Pet"
      />
      {myPets.map((pet) => (
        <div>{pet}</div>
      ))}
      <Button onclick={addNewPet}>Add New Pet</Button>
    </div>
  );
};

export default Loop;
