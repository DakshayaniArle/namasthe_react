import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      // dispatch(removeUser());
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  }

  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          navigate("/Browser");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });
      return () => unsubscribe();
},[])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img  className='w-44'
        src={LOGO}
        alt='logo'
        ></img>
        {user && (<div className='flex p-2'>
          <img src={user?.photoURL} alt='userlogo' className='w-12 h-12'></img>
          <button className='font-bold text-white' onClick={handleSignOut}>(Sign Out)</button>
        </div>)}
    </div>
  )
}

export default Header