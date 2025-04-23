import React from 'react'
import Emailİnput from './email-input'
import Passwordİnput from './password-input'
import ForgotPassword from './forgot-password'
import AuthToggle from './auth-toggle'
import Button from './button'
const LoginForm = () => {
  return (
    <form className='flex flex-col'>
   <Emailİnput/>
  
  <Passwordİnput/>
  
   <ForgotPassword/>
   
    <Button/>
   
   <AuthToggle/>
    </form>
  )
}

export default LoginForm
