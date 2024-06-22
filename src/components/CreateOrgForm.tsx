'use client'
import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import ImagesForm from './ImagesForm'
import InputForm from './InputForm'
import FormSubmit from './FormSubmit'
import { toast } from 'sonner'
import { createOgranization } from '@/services/organization'
import { useRouter } from 'next/navigation'

const CreateOrgForm = () => {
  const router = useRouter()
  const handleSubmit = async (formData: FormData) => {
    try {
      const title = formData.get('title') as string
      const image = formData.get('image') as string
      if (!title || !image) {
        toast.error('please fill all required fields')
        return
      }
      const res = await createOgranization({ title, image })
      toast.success('Organization successfully added')
      router.push(`/organizations/${res?.result?.id}`)
    } catch (error) {
      toast.error('organization not created')
    }
  }
  return (
    <div className='mb-1 flex items-center font-medium'>
      <span>Workspaces</span>

      <Popover>
        <PopoverTrigger asChild>
          <Button asChild type='button' variant='ghost' size='icon' className='ml-auto cursor-pointer'>
            <Plus className='h-4 w-4' />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className='pb-4 text-center text-sm font-medium text-gray-600'>Create Organiztion</div>
          <form action={handleSubmit}>
            <div>
              <ImagesForm name='image' />
              <InputForm id='title' label='Organization Title' type='text' />
              <FormSubmit className='mt-2 w-full'>Create Org</FormSubmit>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default CreateOrgForm
