import Image from 'next/image'
import React from 'react'
import { sidebar } from '../../constants'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <aside className='w-[285px] h-screen bg-white px-[31px] py-[51px] relative'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-4 justify-start items-center'>
                    <Image src={'/assets/Subtract.png'} alt='base' height={42} width={42} />
                    <h1 className='text-2xl leading-[32.74px] font-semibold'>Base</h1>
                </div>
                <Image src={'/assets/collapse.png'} height={28} width={28} className='cursor-pointer'/>
            </div>
            <div className='flex flex-col gap-6 mt-6'>
                {
                    sidebar.map((item, idx) => (
                        <Link href={'#'} key={idx} className='flex gap-4 text-[#0d0d0d]'>
                            <Image src={item.image} alt={item.title} height={24} width={24} color='gray'/>
                            <p className='font-semibold'>{item.title}</p>
                        </Link>
                    ))
                }
            </div>
            <Image src={'/assets/light.png'} alt='theme' width={76} height={40} className='absolute bottom-[31px]'/>
        </aside>
    )
}

export default Sidebar