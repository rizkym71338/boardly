import { Organization } from '@/interfaces'
import Image from 'next/image'
import React from 'react'
import { Separator } from './ui/separator'

interface orgProps {
  getOrganization: any
}
const OrgHeader = ({ getOrganization }: orgProps) => {
  return (
    <>
      <div className='flex items-center gap-x-4'>
        <div className='relative h-14 w-14'>
          <Image fill src={getOrganization?.image} alt={getOrganization?.title} className='rounded-md object-cover' />
        </div>
        <p className='text-xl font-bold'>{getOrganization?.title}</p>
      </div>
      <Separator className='my-4' />
    </>
  )
}

export default OrgHeader
