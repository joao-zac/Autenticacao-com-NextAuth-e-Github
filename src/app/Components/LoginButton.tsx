'use client'

import Image from "next/image";
import { signIn } from "next-auth/react";

import githubIcon from "../../../public/githubVector.svg"

export default function loginButton() {

  function handleClick() {
    signIn('github')
  }

  return (
    <button onClick={handleClick} className="flex bg-txtDarkBtnBg items-center mx-auto mt-16 p-3 rounded-xl">
      <Image src={githubIcon} alt="Icone do github" width={38} height={36} />
      <p className="text-txtLghtBg pl-2">Login com GitHub</p>
    </button>
  )
    
}