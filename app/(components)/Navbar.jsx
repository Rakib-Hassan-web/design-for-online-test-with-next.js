import Link from 'next/link'
import React from 'react'
import { GiAbstract096 } from 'react-icons/gi'

const Navbar = () => {
  return (
    <>
    <nav id='Navbar' className='py-6 ' >
       
     <div className='container flex items-center justify-between'>

        <div className=' flex items-center gap-2'> 
         <Link href='/'><GiAbstract096 className='text-3xl' /></Link>

         <Link href='/' className='text-xl font-medium'>Rakibs Website</Link>


            


        </div>

        <div className='flex items-center gap-8'>
            <Link href={'/'} className='text-[18px] font-normal font-mon '>Home </Link>
            <Link href={'/pages/about'} className='text-[18px] font-normal font-mon '>About </Link>
            <Link href={'/pages/contact'} className='text-[18px] font-normal font-mon '>Contact </Link>
            <Link href={'/pages/more'} className='text-[18px] font-normal font-mon '>More.. </Link>


        </div>
    
         


     </div>
    </nav>
    </>
  )
}

export default Navbar
