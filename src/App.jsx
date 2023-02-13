import { useState } from 'react'
import Navbar from './components/Navbar'
import Users from './components/Users'

function App() {
  const [display, setDisplay] = useState(false);
  const [count, setCount] = useState(0); 
  const changeDisplay = (e)=>{
    setDisplay(e);
    if (e){setCount(count+1)}
    else {setCount(count-1)}
  }
  return (
    <>
      <Navbar changeDisplay={changeDisplay}/>
      {display ? <Users count={count}/> : <></>}
    </>
  )
}

export default App
