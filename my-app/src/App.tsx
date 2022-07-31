import './App.css'
import { AddCharacterForm, character } from './components/add-character-form'
import { useEffect, useState } from 'react'
// eslint-disable-next-line import/no-duplicates
import React from 'react'

function App() {
  const [characterList, setCharacterList] = useState<Array<character>>([
    { name: 'Example character', HP: 0, AC: 0, initiative: 0 },
  ])

  const addCharacter = (character: character) => {
    setCharacterList([...characterList, character])
  }

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
        )
      })}
    </div>
  )
}

export default App
