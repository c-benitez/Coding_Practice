import { useEffect, useState } from 'react'

export type character = {
  name: string
  HP: number
  AC: number
  initiative: number
}

export const AddCharacterForm: React.FC<any> = ({ addCharacter }) => {
  const [character, setCharacter] = useState<character>({
    name: '',
    HP: 0,
    AC: 0,
    initiative: 0,
  })

  const onNameChange = (event) => {
    setCharacter({ ...character, name: event.target.value })
  }

  const onHPChange = (event) => {
    setCharacter({ ...character, HP: event.target.value })
  }

  const onACChange = (event) => {
    setCharacter({ ...character, AC: event.target.value })
  }

  const onInitiativeChange = (event) => {
    setCharacter({ ...character, initiative: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addCharacter(character)
    setCharacter({
      name: '',
      HP: 0,
      AC: 0,
      initiative: 0,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={character.name} onChange={onNameChange} data-testid="Name" />
      </label>
      <label>
        Current HP:
        <input type="text" value={character.HP} onChange={onHPChange} data-testid="HP"/>
      </label>
      <label>
        AC:
        <input type="text" value={character.AC} onChange={onACChange} data-testid="AC"/>
      </label>
      <label>
        Initiative:
        <input
          type="text"
          value={character.initiative}
          onChange={onInitiativeChange}
          data-testid="Initiative"
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
