import { useState } from 'react'
import './App.css'
import { GithubLogo } from './components/GithubLogo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>CSS DRAWINGS</h1>
      <section>
        <GithubLogo />
      </section>
    </div>
  )
}

export default App
