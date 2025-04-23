import React, { useState } from 'react';
import EmailInput from './email-input';
import PasswordInput from './password-input';
import ForgotPassword from './forgot-password';
import AuthToggle from './auth-toggle';
import Button from './button';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate=useNavigate()
  const [isSign, setIsSign] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target); 
    const { email, password } = Object.fromEntries(formData.entries());

    try {
      if (isSign) {
       const res= await createUserWithEmailAndPassword(auth, email, password);
       
        //doğrulama epostası gönder
        await sendEmailVerification(res.user)
        
        //giriş yap moduna gec
        setIsSign(false);
       
        toast.info("Mailinize dogrulama epostası gönderildi");
      } else {
        const res=await signInWithEmailAndPassword(auth, email, password);
        
        
        //mailini dogrulamamış ise bildirim gönder
        if(!res.user.emailVerified){
          return toast.info("Lütfen mailinizi doğrulayın")
        }
        
        //bildirim gönder ve anasayfaya yönlendir
        navigate("/feed")
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
