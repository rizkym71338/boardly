'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Plus, X } from 'lucide-react'
import InputForm from './InputForm'
import FormSubmit from './FormSubmit'
import { toast } from 'sonner'
import { createLists } from '@/services/list'

const CreateList = ({ boardId }: { boardId: string }) => {
  const [isEditable, setIsEditable] = useState(false)
  const editEnable = () => {
    setIsEditable(true)
  }
  const handleSubmit = async (formData: FormData) => {
    try {
      const title = formData.get('title') as string
      if (!title) {
        toast.error('please add list title')
        return
      }
      const res = await createLists({ title, boardId })
      console.log('res', res)
      toast.success('List successfully added')
    } catch (error) {
      toast.error('organization not created')
    }
  }

  if (isEditable) {
    return (
      <li className='relative h-full w-[272px] shrink-0 select-none'>
        <form action={handleSubmit} className='space-y-4 rounded-md bg-white p-3 shadow-lg'>
          <div>
            <InputForm id='title' label='List Title' type='text' />
            <FormSubmit className='mt-2'>Create List</FormSubmit>
          </div>
        </form>
        <Button className='absolute bottom-0 right-0 bg-white text-black hover:bg-white' onClick={() => setIsEditable(false)}>
          <X className='h-4 w-4' />
        </Button>
      </li>
    )
  }
  return (
    <li className='mt-1.5 h-full w-[272px] shrink-0 select-none p-1'>
      <Button className='mt-8 flex w-full justify-between rounded-lg bg-white p-4 text-sm text-black transition hover:bg-slate-100' onClick={editEnable}>
        Create List
        <Plus className='mr-2 h-4 w-4' />
      </Button>
    </li>
  )
}

export default CreateList
