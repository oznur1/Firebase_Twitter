import React from 'react';

const ForgotPassword = ({ show }) => {
return (
  show ? ( 
    <button
      type='button'
      className='block text-end text-sm text-gray-500 hover:text-gray-400 mt-2 cursor-pointer w-full'
    >
      Şifreni mi unuttun
    </button>
    ):(
      <div className='h-[28px] w-1'></div>
    )
  )
}

export default ForgotPassword;

