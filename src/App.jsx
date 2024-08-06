import { useState } from 'react'
import './App.css'
import HelloWorld from '../component/HelloWorld';
import HelloName from '../component/HalloName';
import CounterButton from '../component/CounterButton';
import RenderLog from '../component/RenderLog';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HelloWorld/>

      <HelloName name="Laura"/>

      <CounterButton />

      <RenderLog />

    </>
  )
}

export default App
