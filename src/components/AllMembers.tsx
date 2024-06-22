'use client'
import { Organization } from '@/interfaces'
import React from 'react'
import AddMmebers from './AddMmebers'
import { Button } from './ui/button'
import { X } from 'lucide-react'
import { removeOrgMember } from '@/services/organization'

const AllMembers = ({ organization }: { organization: any }) => {
  const removeMember = async (user: any) => {
    await removeOrgMember({
      userId: user.id,
      organizationId: organization?.id,
    })
  }
  return (
    <div>
      <div className='mb-5 flex justify-between'>
        <h2>Members</h2>
        <AddMmebers organization={organization} />
      </div>
      {organization.users?.map((user: any) => (
        <div className='mb-5 flex items-center justify-between' key={user?.id}>
          <div className='flex items-center gap-2'>
            <img src={user?.image} alt='' className='h-12 w-12 rounded-full object-cover' />
            <div>
              <h1 className='font-semibold'>{user?.name}</h1>
              <p className='text-xs text-gray-400'>{user?.id}</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <p className=''>{user?.email}</p>
            <Button className='bg-slate-100 text-slate-500 hover:bg-slate-100' onClick={() => removeMember(user)}>
              <X className='mr-1 h-4 w-4' />
              <span>remove</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AllMembers
