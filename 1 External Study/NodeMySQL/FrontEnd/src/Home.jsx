import React, { useEffect } from 'react';
import axios, {} from 'axios';

const Home = () => {
    
    function fetching() {
        axios.get('http://localhost:8081/').then((res)=>console.log(res.data));
    }
    
    useEffect(()=> {
        fetching();
    }, [])
  return (
    <div>Home</div>
  )
}

export default Home