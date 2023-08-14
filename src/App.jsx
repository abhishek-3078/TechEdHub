import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login'
import SignUp from './components/signup'

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
    <>
    <Login/>
    </>
  )
}

export default App
