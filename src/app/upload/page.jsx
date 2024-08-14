'use client'

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar'
import Image from 'next/image';
import React, { useState } from 'react'

const page = () => {

  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  return (
    <div className='bg-[rgb(245,245,245)] flex'>
      <Sidebar />
      <div className='h-[636.93px] w-[1155px] pt-[46px] px-[45px] pb-[53px]'>
        <div className='h-full flex flex-col items-center justify-between'>
          <Header />
          <div className='w-[596px] h-[367px] bg-white flex flex-col p-4 rounded-lg justify-between'>
            <div className='w-full h-[258px] border-2 border-dotted border-gray-200 rounded-lg flex justify-center items-center'>
              <div className='flex flex-col items-center gap-4'>
                <Image src={'/assets/excel.png'} alt='excel' height={36} width={36}/>
                <p className='text-gray-400'>Drop your excel sheet here or <span className='cursor-pointer text-[#605bff]'>browse</span></p>
              </div>
            </div>
            <button className='w-full h-14 bg-[#605bff] hover:bg-[#4c57d7] duration-300 rounded-lg text-sm font-semibold text-white flex justify-center items-center gap-2 disabled:bg-[#8a86fa]' disabled={isUploading || isUploaded}>
              {
                isUploading ? (
                  <Image
                    src={'/assets/Rectangle.png'}
                    alt='loading'
                    height={19}
                    width={19}
                    className='animate-spin'
                  />
                ) : (
                  <>
                    <Image
                      src={'/assets/upload.png'}
                      alt='upload'
                      height={14.25}
                      width={14.25}
                    />
                    <p>Upload</p>
                  </>
                )
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page