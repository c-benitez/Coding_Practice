import { useEffect, useState } from "react";

export type character = {
  name: string;
  HP: number;
  AC: number;
  initiative: number;
};

export const AddCharacterForm: React.FC<any> = ({ addCharacter }) => {
  const [character, setCharacter] = useState<character>({
    name: "",
    HP: 0,
    AC: 0,
    initiative: 0,
  });

  const onNameChange = (event) => {
    setCharacter({ ...character, name: event.target.value });
    console.log(character.name);
  };

  const onHPChange = (event) => {
    setCharacter({ ...character, HP: event.target.value });
    console.log(character.HP);
  };

  const onACChange = (event) => {
    setCharacter({ ...character, AC: event.target.value });
    console.log(character.AC);
  };

  const onInitiativeChange = (event) => {
    console.log(character.initiative);
    setCharacter({ ...character, initiative: event.target.value });
  };

  useEffect(() => console.log("Use Effect"));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("%%%%%%", event);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={character.name} onChange={onNameChange} />
      </label>
      <label>
        Current HP:
        <input type="text" value={character.HP} onChange={onHPChange} />
      </label>
      <label>
        AC:
        <input type="text" value={character.AC} onChange={onACChange} />
      </label>
      <label>
        Initiative:
        <input
          type="text"
          value={character.initiative}
          onChange={onInitiativeChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
