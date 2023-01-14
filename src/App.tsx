import { useState } from 'react'
import './App.css'
import { Stage } from './components/Stage'
import { GitLogo } from './components/GitLogo'
import { FigmaLogo } from './components/FigmaLogo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>CSS DRAWINGS</h1>
      <section>
        <h2>Figma logo</h2>
        <Stage>
          <FigmaLogo />
        </Stage>
      </section>
      <section>
        <h2>Git logo</h2>
        <GitLogo />
      </section>
    </div>
  )
}

export default App
