import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = (props) => {

  const navigation = useNavigate()

  const [email,setEmail] = useState('');
  const [pass, setPass] = useState('');

 const prevEmail = "vipul@gmail.com";
 const prevPass = "react"

  function summitBtnHandler(event){
    event.preventDefault()
    if(email.toLowerCase()=== prevEmail && prevPass === pass){
      props.setIsLogin(true)
      navigation('/dashboard')
    }else{
      props.setIsLogin(false)
    }
  }

  return (
    <div>
      <div>
        <p>{`use email id = ${prevEmail} and password = ${prevPass}`}</p>
      </div>
      <form onSubmit={summitBtnHandler}>
        <label>Email Address : </label>
        <input type='email' onChange={(event)=>{ setEmail(event.target.value)}} required />
        <br/>
        <label>Password : </label>
        <input type='password' required onChange={(event)=>{ setPass(event.target.value)}} />
        <br/>
        <button type='summit'>Summit</button>
      </form>
    </div>
  )
}

export default Home
