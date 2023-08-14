import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [backendData , setBackendData] = useState([{}]);

  // for fetching data from the server side routes
  // useEffect(()=>{
  //   fetch('/someRoute').then(
  //       response => response.json()
  //     ).then(
  //       data=>{
  //         setBackendData(data);
  //     }
  //   )
  // },[]);
  
  return (
    <div className=" text-primary">
      Let's start building here front page
    </div>
  )
}

export default App
