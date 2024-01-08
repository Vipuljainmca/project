// import Template from "../components/Auth/Template";
import { useState } from "react";


import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {

  const navigation = useNavigate()

  const emailId = 'xyz@gmail.com'
  const passw = "reactDev"

    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')
    
    function emailChangeHandler(e){
      setEmail(e.target.value)
    }

    function passChangeHandler(e){
      setPass(e.target.value)
      
    }

    function submitHandler(e){
      e.preventDefault()
      console.log(pass)
      console.log(email)
      if(emailId==email.toLowerCase() && passw === pass ){
        setIsLoggedIn(true)
        navigation('/das')
      }else{
        setIsLoggedIn(false)
      }
    }


  return (
    <div>
      
  

      <h3>  emailId = 'xyz@gmail.com'</h3> 
      <h3> passw = "reactDev"</h3>

    <form onSubmit={submitHandler}  >
            <label >
                <p > Email Address<sup >*</sup>
                </p>


                <input type="email"
                    required
                    
                    placeholder="Enter your email address"
                    onChange={emailChangeHandler}
                    name="email"/>
            </label>

            <label>
                <p > Password <sup>*</sup>  </p>

                <input
                    type="password"
                    required
                  
                    placeholder="Enter Password"
                    onChange={passChangeHandler}
                    name="password"/>  
            </label>

            <button>Sign in</button>
        </form>

        </div>
  );
}

export default Login;
