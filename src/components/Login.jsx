import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react'
import {checkValidData} from "../utils/validate"
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {

    const[isSignIn,setIsSignIn] = useState(true);
    const[errormsg,setErrorMsg] = useState(null);

    const toggleSignIn = ()=>{
        setIsSignIn(!isSignIn);
    }
    const name = useRef(null);
        const email = useRef(null);
        const password = useRef(null);

    const handleSubmit = () => {
        // let message = null;
        // if(isSignIn) {
             
        // }else{
        //     message = checkValidData(email.current.value,password.current.value,name.current.value);
        // }
        const message = checkValidData(email.current.value,password.current.value);  
        setErrorMsg(message);

        if(message)   return;

        if(!isSignIn){
            //sign up
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value )
            .then((userCredential) => {
              
              const user = userCredential.user;
              // console.log(user);
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMsg(errorCode +"-"+ errorMessage);
              // ..
            });

        }else{
            //sign in 
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
               const user = userCredential.user;
              //  console.log(user);
               })
             .catch((error) => {
               const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMsg(errorCode+"-"+errorMessage);
               });

        }
       
        //   console.log(email.current.value);
        //   console.log(password.current.value);
        //   console.log(name.current.value);
    }
  return (
    <div>
         <Header/>
         <div className='absolute'>
         <img
         src='https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web_tall_panel/IN-en-20250317-TRIFECTA-perspective_d3bd14de-3c51-4227-9244-f14c89469189_large.jpg'
         alt='bg-pic'/>
         </div>
         <form 
         onSubmit={(e)=>e.preventDefault()}
         className='w-4/12 p-12 absolute bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-70'>
            <h1 className='text-3xl text-white font-bold p-2 m-2'>{isSignIn ? "Sign In" : "Sign UP"}</h1>
           {!isSignIn && (<input ref={name} type='text' placeholder='Full Name' className='p-4 m-2 w-full rounded-lg  bg-gray-600'></input>)}
         <input  ref={email} type='text' placeholder='Email or Mobile Number' className='p-4 m-2 w-full rounded-lg  bg-gray-600'></input>
         <input ref={password} type='password' placeholder='Password' className='p-4 m-2 w-full rounded-lg bg-gray-600'></input>
         <p className='text-lg text-red-600 font-bold'>{errormsg}</p>
         <button 
         className='p-3 m-2 bg-red-600 w-full rounded-m text-white text-bold text-center' onClick={handleSubmit}>
         {isSignIn ? "Sign In" : "Sign UP"}</button>
         <p className='text-white m-2 cursor-pointer' onClick={toggleSignIn}>{isSignIn ? "New to Netflix? Sign Up now" : "Already registered? Sign In now"}</p>
         </form>
    </div>
  )
}

export default Login 
