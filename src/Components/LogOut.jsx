import React from 'react'
import { auth } from '../firebase'

const LogOut = () => {
    const signOut = ()=>{
        signOut(auth)
    }
  return (
    <button onClick={() => auth.signOut()} className='bg-gray-200 p-4 hover:bg-gray-100 rounded-md font-bold'>
        LogOut
    </button>
  )
}

export default LogOut
