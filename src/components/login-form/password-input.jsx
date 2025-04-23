import React, { useState } from 'react'
import { AiOutlineEye as Open,AiOutlineEyeInvisible as Close} from 'react-icons/ai'


const Passwordİnput = () => {
  
  const [isShow,setIsShow]=useState(false)
  return (
    <div className='mt-5'>
    
    <label htmlFor="password">Şifre</label>
   
   <div className='relative w-full'>  
    <input type={isShow ? "text" : "password"} name='password' className='input' />
    
    <button  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-700 cursor-pointer text-2xl"
     type='button'
     onClick={()=>setIsShow(!isShow)}
    >{isShow ? <Close/> : <Open/>}
    </button>
    </div>
    </div>
  )
}

export default Passwordİnput
