import React from 'react'
import {auth} from '../firebase'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import GoogleButton from 'react-google-button'

const googleSignIn = () =>{
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
}

const Signin = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <GoogleButton onClick={googleSignIn}/>
      </div> 
    </div>
  )
}

export default Signin
