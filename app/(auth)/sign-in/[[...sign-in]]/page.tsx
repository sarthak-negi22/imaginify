import { SignIn } from "@clerk/nextjs"

import { Metadata } from "next";

export const metadata : Metadata = {
    title : 'Evently | Sign In'
}

const SignInPage = () => {
  return (
    <SignIn />
  )
}

export default SignInPage