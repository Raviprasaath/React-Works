import React, { useEffect, useState } from 'react'
import CareerList from '../Components/CareerList';
import { Link } from 'react-router-dom';

const Careers = () => {
  const [data, setData] = useState([]);
  const fetching = async() => {
    const response = await fetch('http://localhost:8000/careers');
    if (response.ok) {
      const result =  await response.json();
      setData(result);
    } else {
      throw new Error('URL fails')
    }
  }

  useEffect(()=> {
    fetching();
  }, [])


  return (
    <>
    <h1>Jobs</h1>
    {data && 
      data.map((item)=>{
        return <Link key={item.id} to={item.id.toString()}>
          <CareerList  title={item.title} location={item.location} />
        </Link>
        
      })
    }
    </>
  )
}

export default Careers
