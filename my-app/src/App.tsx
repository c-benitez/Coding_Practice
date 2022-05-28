import "./App.css";
import { AddCharacterForm, character } from "./components/add-character-form";
import { useState } from "react";

function App() {
  const [characterList, setCharacterList] = useState<Array<character>>([]);

  const addCharacter = (character: character) => {
    characterList.push(character);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Character</p>
      </header>
      <AddCharacterForm addCharacter={addCharacter}></AddCharacterForm>
      <div></div>
      {characterList.map((character) => {
        return (
          <div>
            <p>{character.name}</p>
            <p>{character.HP}</p>
            <p>{character.AC}</p>
            <p>{character.initiative}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
