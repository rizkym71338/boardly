'use client'
import { productiveList } from '@/lib/data'
import React, { useState } from 'react'

const Productivity = () => {
  const [itemIndex, setItemIndex] = useState(0)
  return (
    <div className='px-[10%]'>
      <p>Boardly 101</p>
      <h1 className='text-4xl font-semibold'>A productivity powerhouse</h1>
      <p className='my-5 w-full text-xl lg:w-1/2'>
        Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. Learn more
        in our guide for getting started.
      </p>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-[1.2fr_2fr]'>
        <div className='flex flex-col justify-between py-4 leading-normal'>
          {productiveList?.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer rounded-md px-3 py-6 ${index == itemIndex ? 'bg-white md:border-l-4 md:border-[#00c7e5]' : ''}`}
              onClick={() => setItemIndex(index)}
            >
              <h5 className='mb-2 text-lg font-bold tracking-tight'>{item.title}</h5>
              <p className='mb-3 font-normal text-gray-700'>{item.desc}</p>
            </div>
          ))}
        </div>

        <img src={`/productive_${itemIndex + 1}.jpg`} className='h-auto w-full rounded-t-lg object-cover' alt='' />
      </div>
    </div>
  )
}

export default Productivity
