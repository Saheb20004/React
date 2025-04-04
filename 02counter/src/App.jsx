import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(10)
//let counter=21
const Increment=()=>{
  console.log('Clicked',counter);
  if(counter>20){
    counter=0
  }
  setCounter(counter=>counter+1)
  setCounter(counter=>counter+1)
}

const Decrement=()=>{
  console.log('Clicked',counter);
  counter=counter-1
  if(counter<0){
    counter=0
  }
  setCounter(counter)
}
  return (
    <>
      <h1>Chai aur She</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={Increment}>Increment{counter}</button>
      <br />
      <button onClick={Decrement}>Decrement{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
