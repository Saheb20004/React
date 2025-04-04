import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/*1.
function myApp(){
     return (
      <div>
        <h1>Custom App | Bro</h1>
      </div>
     )
}
*/
const anotherUser="Chai with Aagman"
/*3.const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)
*/

const reactElement=React.createElement(
  'a',
  {
    href:'https://www.google.com',
    target:'_blank',
  },
  'Click me to visit Google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
    //<App />
    //1. <myApp />
    //3.anotherElement
    reactElement
)
