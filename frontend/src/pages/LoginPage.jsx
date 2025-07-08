import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
// import axiosInstance from '../utils/axios.js'
// import { set } from 'mongoose'

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  useNavigate

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(email, password)
    // try {
    //   const res = await axiosInstance.post("/login", {email, password});
    // } catch (error) {
    //   console.log("error in login", error)
    // }
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <label>Email</label>
      <input 
        type="email" 
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input 
        type="password" 
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
      <Link to="/register">Don't have an account, Register</Link>
    </form>
  )
}

export default LoginPage