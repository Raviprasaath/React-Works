import React, { useState } from 'react'
import { Navigate } from 'react-router';

const About = () => {
  const [user, setUser] = useState(true);

  if (!user) {
    return <Navigate to='/' replace={true} />
  }

  return (
    <>
      <div>
        About
      </div>
      <button onClick={()=>setUser(false)}>
        Logout
      </button>
    
    </>
  )
}

export default About
