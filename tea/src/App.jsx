/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'


function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)
  const handleClick = ()=>{
    setCount(count + 1)
  }
  return (
    <>
      <div>
        {count}
        <button onClick={handleClick}>click</button>
      </div>
    </>
  )
}

export default App
