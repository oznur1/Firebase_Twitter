import React from 'react'
import { navSections } from '../../utils/constants'
import { getUserName } from '../../utils/helper'
import { FaDoorOpen } from 'react-icons/fa6'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

const Nav = ({user}) => {
  return (
    <div className='flex flex-col justify-between items-end px-2 py-4'>
     
     {/* Links */}
     <div> 
     <img src="public/x-logo.webp" alt="x-logo" className='w-14 mb-4'/>
    
    {navSections.map((item,key)=>(
      <div key={key}
      className='flex items-center gap-3 text-2xl md:text-xl p-3 cursor-pointer rounded-lg transition hover:bg-tw-gray max-md:justify-center'
      >
      {item.icon}

      <span className='whitespace-nowrap max-md:hidden'>{item.title}</span>
      </div>
    ))}
     </div>
   
    {/* User */}
    <div>
      <div className='flex max-md:flex-col gap-4 justify-between max-md:items-center'>
        <div className='flex gap-2'>
          <img src={user?.photoURL} 
          className='rounded-full max-w-[45px]'/>

          <div>
            <p className='max-md:hidden text-sm'>{user.displayName}</p>
            <p className='max-md:hidden text-sm'>{getUserName(user.displayName)}</p>
          
          </div>
        </div>

        <button onClick={()=>signOut(auth)}
        className='text-xl cursor-pointer' title="Çıkış Yap">
          <FaDoorOpen/>
        </button>
      </div>
    </div>

    </div>
  )
}

export default Nav
