import React, { useState } from 'react'
import './LogInPage.css'

const LogInPage = () => {

  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [error, setError] = useState({
    nameError: false,
    emailError: false,
    passwordError: false,
  })


  const handlerInput = (e, value) => {
    if (!auth) {
      setUser((prev)=>({...prev, [value]:e.target.value}));
    } else {
      setUser((prev)=>({...prev, [value]:e.target.value}));
    }

    if (value === "name" && e.target.value.length > 0 && e.target.value.length < 3) {
      setError((prev)=>({...prev, nameError: true}))
    } else {
      setError((prev)=>({...prev, nameError: false}))
    }
    if (value === "email" && e.target.value.length > 0 && !e.target.value.includes("@gmail")) {
      setError((prev)=>({...prev, emailError: true}))
    } else {
      setError((prev)=>({...prev, emailError: false}))
    }
    if (value === "password" && e.target.value.length > 0 && e.target.value.length < 9) {
      setError((prev)=>({...prev, passwordError: true}))
    } else {
      setError((prev)=>({...prev, passwordError: false}))
    }
  }

  console.log(error);

  const handlerFormSubmit =(e) => {
    setUser({name:"", email:"", password:""});
    setError({nameError: false, emailError: false, passwordError: false});
    e.preventDefault();
  }
  
  const handlerSwapAuth = () => {
    setAuth(!auth);
    setUser({name:"", email:"", password:""});
    setError({nameError: false, emailError: false, passwordError: false});
  }

  return (
    <section className='login-container'>
      <h2>{auth?"LOG IN":"SIGN UP"}</h2>
      <form onSubmit={handlerFormSubmit} className='login-form' action="">
        {!auth && 
        <>
          <input type="text" onChange={(e)=>handlerInput(e, "name")} value={user.name} name="name" className='input-text' placeholder='User Name' />
          {error.nameError &&
            <p className='error-statement'>User Name Not Valid</p>
          }
        </>
        }
        <input type="email" onChange={(e)=>handlerInput(e, "email")} value={user.email} name="email" className='input-text' placeholder='Email' />
        {error.emailError &&
          <p className='error-statement'>Enter Valid Email ID</p>
        }
        <input type="password" onChange={(e)=>handlerInput(e, "password")} value={user.password} name="password" className='input-text' placeholder='Password' />
        {error.passwordError && 
          <p className='error-statement'>Password Should be minimum 8</p>
        }
        <button className='btn-submit'>Submit</button>
        <p className='auth-swap' onClick={handlerSwapAuth}>Already have a Account</p>
      </form>
    </section>
  )
}

export default LogInPage
