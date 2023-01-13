import { useState } from 'react'
import './App.css'
import { GitLogo } from './components/GitLogo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>CSS DRAWINGS</h1>
      <section>
        <GitLogo />
      </section>
    </div>
  )
}

export default App
