import { fireEvent, render, screen } from '@testing-library/react'
import userEvent  from '@testing-library/user-event'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const name = screen.getByTestId('Name')
  userEvent.type(name, 'Carlos')
  const submitButton = screen.getByText('Submit')
  // submitButton.click()
  fireEvent.click(submitButton)
  const character = screen.getByText('Carlos')
  expect(character).toBeInTheDocument()
})
