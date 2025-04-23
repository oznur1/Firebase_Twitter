import React, { useState } from 'react';
import EmailInput from './email-input';
import PasswordInput from './password-input';
import ForgotPassword from './forgot-password';
import AuthToggle from './auth-toggle';
import Button from './button';

import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [isSign, setIsSign] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target); // ✅ doğru kullanım
    const { email, password } = Object.fromEntries(formData.entries());

    try {
      if (isSign) {
        await createUserWithEmailAndPassword(auth, email, password);
       
        //doğrrılama epostası gönder
        await sendEmailVerification(email)
       
        toast.info("Mailinize dogrulama epostası gönderildi");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.info("Giriş yapıldı");
      }
    } catch (error) {
      toast.error("Bir hata oluştu: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <EmailInput />
      <PasswordInput />
      <ForgotPassword show={!isSign} />
      <Button isSign={isSign} />
      <AuthToggle isSign={isSign} setIsSign={setIsSign} />
    </form>
  );
};

export default LoginForm;
