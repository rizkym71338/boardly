'use client'
import React, { useEffect, useState } from 'react'
import { Popover, PopoverContent } from './ui/popover'
import { PopoverTrigger } from '@radix-ui/react-popover'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import { getWithoutOrgMembers, updateOrgMember } from '@/services/organization'
import { User } from '@/interfaces'

const AddMmebers = ({ organization }: { organization: any }) => {
  const [memebers, setMembers] = useState<any>([])
  const getMembers = async () => {
    const getUsers = await getWithoutOrgMembers({
      organizationId: organization?.id,
    })
    setMembers(getUsers?.result)
  }
  useEffect(() => {
    if (organization) getMembers()
  }, [])

  const handleSubmit = async (user: any) => {
    user?.orgIds?.push(organization?.id)
    organization?.userIds?.push(user?.id)
    await updateOrgMember({
      id: user.id,
      organizationId: organization.id,
      orgIds: user?.orgIds,
      userIds: organization?.userIds,
    })
    setMembers(memebers?.filter((item: User) => item?.id != user?.id))
  }
  return (
    <Popover>
      <PopoverTrigger>
        <Button className='ml-auto cursor-pointer bg-white text-black hover:bg-slate-100'>
          <Plus className='h-4 w-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent align='start' className='z-50 w-80 bg-white pt-3' side='bottom' sideOffset={18}>
        <div className='pb-4 text-center text-sm font-medium text-neutral-600'>Add Member</div>
        <div>
          {memebers?.map((user: any) => (
            <div key={user?.id} className='flex cursor-pointer items-center gap-2 p-2 hover:bg-slate-100' onClick={() => handleSubmit(user)}>
              <img src={user?.image} className='h-12 w-12 rounded-full object-cover' alt='' />
              <div>
                <h1 className='font-semibold'>{user?.name}</h1>
                <p className='text-xs text-gray-400'>{user?.id}</p>
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default AddMmebers
