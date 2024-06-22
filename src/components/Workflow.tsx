import * as React from 'react'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { workflowList } from '@/lib/data'
import { Button } from './ui/button'

export function Workflow() {
  return (
    <div className='mt-10 bg-white px-[10%] py-16'>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-full'
      >
        <CarouselContent>
          {workflowList.map((item, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/4'>
              <div className='h-64 rounded-md bg-white'>
                <div className={`h-10 w-full ${item.color} relative rounded-t-md`}>
                  <div className='absolute bottom-[-15px] left-3 h-10 w-10 rounded-md bg-white p-1'>
                    <img src={item.img} alt='' />
                  </div>
                </div>
                <div className='p-3 pt-6'>
                  <h5 className='mb-2 text-lg font-bold tracking-tight'>{item.title}</h5>
                  <p className='mb-3 font-normal text-gray-700'>{item.desc}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='absolute left-[75%] top-[-25px] bg-slate-300 lg:left-[92%]' />
        <CarouselNext className='absolute right-0 top-[-25px] bg-slate-300' />
      </Carousel>
      <div className='mb-16 flex flex-col items-center justify-between lg:flex-row'>
        <p className='mb-2 w-full text-center text-lg lg:w-2/3 lg:text-start'>
          No need to start from scratch. Jump-start your workflow with a proven playbook designed for different teams. Customize it to make it yours.
        </p>
        <Button className='border border-blue-500 bg-transparent text-black hover:bg-white'>Explore all use cases</Button>
      </div>
    </div>
  )
}
