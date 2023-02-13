import React from 'react'
import image from '../assets/Yashimg.png' 

const Navbar = ({changeDisplay}) => {

  return (
    <nav className="text-slate-500 flex border-2">
      <img src={image} alt='LogoHere' className='pt-2 h-12'/>
      <button className='text-2xl text-black m-2 p-1'>Yash</button>
      <div className='w-[100%] flex justify-end'>
        <button className="m-2 p-1 hover:text-black">Home</button>
        <button className="m-2 p-1 hover:text-black">About</button>
        <button className="m-1 p-1 pr-6 border-r-2 hover:text-black">Contact</button>
        <button className="m-2 ml-3 p-2 border text-cyan-500 rounded-md border-cyan-500 hover:text-white hover:bg-cyan-500 hover:font-semibold" onClick={()=>{changeDisplay(true)}}>Get Users</button>
        <button className="m-2 ml-3 p-2 text-amber-400 border rounded-md border-amber-400 hover:text-white hover:bg-amber-400 hover:font-semibold" onClick={()=>{changeDisplay(false)}}>Clear Screen</button>
      </div>
      
    </nav>
  )
}

export default Navbar
