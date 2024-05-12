import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

function App() {
  return (
    <main>
      <TodoInput />
      <TodoList />
    </main>
  )
}

export default App
