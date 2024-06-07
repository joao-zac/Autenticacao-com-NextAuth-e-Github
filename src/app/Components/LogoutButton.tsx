'use client'

import { signOut } from "next-auth/react";

export default function LogoutButton() {

  function handleClick() {
    signOut()
  }

  return (
    <button onClick={handleClick} 
    className="md:ml-36 ml-24  bg-txtDarkBtnBg text-2xl text-txtLghtBg 
    mt-8 px-16 py-3 rounded-xl">
    Logout</button>
  )
}