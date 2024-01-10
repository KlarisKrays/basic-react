import { useState } from 'react'
import Button from './component/button'

function App() {

  const [count, setCount] = useState(0)

  const increament = () => {
    setCount(count + 1)
  }

  const decreament = () => {
    setCount(count - 1)
  }

  return (
    <div>
      {/* <button onClick={increament}>Add</button> */}
      <Button>Add Counter</Button>
      {count}
      <Button>Min Counter</Button>
      {/* <button onClick={decreament}>Min</button> */}
    </div>
  )
}

export default App
