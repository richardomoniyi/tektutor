import { useState } from 'react'

import TutorRegistrationForm from './components/TutorRegistrationForm';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TutorRegistrationForm />
    </>
  )
}
export default App
