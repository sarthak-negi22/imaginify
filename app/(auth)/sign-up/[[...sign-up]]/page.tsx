import { SignUp } from "@clerk/nextjs"

import { Metadata } from "next";

export const metadata : Metadata = {
    title : 'Evently | Sign Up'
}

const SignUpPage = () => {
  return (
    <SignUp />
  )
}

export default SignUpPage