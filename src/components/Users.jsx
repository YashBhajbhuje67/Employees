import React, { useEffect, useState } from 'react'
import axios from 'axios';
import User from './User';
import Loading from '../Assets/Loading.svg'

const Users = ({count}) => {
    const [Data, setData] = useState([]);
    const [showLoader, setShowLoader] = useState(true);

    const fetchData = async()=>{
        var value = [];
        let i=1;
        while (true){
            const msg = await axios(`https://reqres.in/api/users?page=${i}`);
            value=value.concat(msg.data.data);
            if (i == msg.data.total_pages){break;}
            // break;
            i++;
        }
        setData(value);
    }

    useEffect(()=>{
      setShowLoader(true);
      setData([]);
      fetchData();
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 1000);
      return () => clearTimeout(timer);
    }, [count]);

  return (
    <>{showLoader ? <img src={Loading} alt='Loading' className='relative left-[45%] top-32'/>:
    <div className='flex flex-wrap place-content-evenly p-4'>
    {Data.map((data)=>{
      return (<User data={data} key={data.id}/>)
    })}
  </div>}</>
  )
}

export default Users
