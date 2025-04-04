import { useState } from 'react'

import './App.css'


function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    <h1 className='text-center text-amber-800 text-3xl font-bold'>I made it with love and care for Aagman</h1>
    <div className='w-full h-screen duration-500 rounded-3xl justify-center' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 px-4' >
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>

          <button onClick={() => setColor("indigo")}
           className='outline-none px-4 py-4 rounded-full text-white shadow-lg' style={{backgroundColor: 'indigo'}}>
          Violet
          </button>

          <button onClick={() => setColor("skyblue")} 
          className='outline-none px-4 py-4 rounded-full text-white shadow-lg' style={{backgroundColor: 'skyblue'}}>
          Indigo
          </button>

          <button onClick={() => setColor("blue")} 
          className='outline-none px-4 py-4 rounded-full text-white shadow-lg' style={{backgroundColor: 'blue'}}>
          Blue
          </button>

          
          <button onClick={() => setColor("green")} 
          className='outline-none px-4 py-4 rounded-full text-white shadow-lg' style={{backgroundColor: 'green'}}>
          Green
          </button>
          
          <button onClick={() => setColor("yellow")}
           className='outline-none px-4 py-4 rounded-full text-white shadow-lg' style={{backgroundColor: 'yellow'}}>
          Yellow
          </button>
          
          <button onClick={() => setColor("orange")}
           className='outline-none px-4 py-4 rounded-full text-white shadow-lg' style={{backgroundColor: 'orange'}}>
          Orange
          </button>
          
          <button onClick={() => setColor("red")}
           className='outline-none px-4 py-4 rounded-full text-white shadow-lg' style={{backgroundColor: 'red'}}>
          Red
          </button>

        </div>

      </div>
    </div>
    
    

    </>
  )
  
}

export default App