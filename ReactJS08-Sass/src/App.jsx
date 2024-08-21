import { useState } from 'react'
import Button from './components/Button'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Button>primary</Button>
        <Button className = "button--secondary">secondary</Button>
      </div>
    </>
  )
}

export default App
