import React from 'react'
import icon from '../Assets/icon.svg'

const User = ({data}) => {
  return (
    <div className='cursor-pointer flex border-2 rounded-md w-96 m-2 p-2 hover:outline-none hover:border-cyan-500 hover:ring-cyan-500 '>
    <img src={data.avatar} className='h-24 w-24 border rounded-full hover:rounded-md '/>
    <div className='p-6'>
    <div className='text-xl font-bold text-cyan-600 text-center'>{data.first_name+" "+data.last_name}</div>
    <div className='flex'>
        <img src={icon} alt='email' className='h-7'/>
        {data.email}
    </div>
    </div>
    
    </div>
  )
}

export default User
