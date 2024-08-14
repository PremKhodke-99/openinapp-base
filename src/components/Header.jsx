import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <nav className='w-full flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>Upload CSV</h1>
        <div className='flex justify-between items-center gap-4'>
            <Image src={'/assets/Vector.png'} alt='notification' width={18} height={23} />
            <Image src={'/assets/Profile.png'} alt='profilepic' width={30} height={30} className='rounded-full' />
        </div>
    </nav>
  )
}

export default Header