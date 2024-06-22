'use client'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const login = () => {
  const router = useRouter()
  const { status } = useSession()

  if (status == 'authenticated') {
    router.push('/')
  }
  return (
    <div className='grid h-screen place-content-center bg-slate-100'>
      <div className='flex h-[50vh] w-[400px] flex-col items-center justify-center gap-5 bg-white shadow-md'>
        <img src='/logo.png' className='h-10 w-auto' alt='' />
        <p className='text-md font-bold'>Log in to continue</p>
        <div
          className='flex w-5/6 cursor-pointer items-center justify-center gap-2 rounded border-[1px] border-gray-200 bg-white px-6 py-1 font-medium'
          onClick={() => signIn('google')}
        >
          <img className='h-10' src='https://pbs.twimg.com/profile_images/1605297940242669568/q8-vPggS_400x400.jpg' alt='' />
          <span>Sign in with Google</span>
        </div>
        <Link href='/' className='cursor-pointer text-center text-xs text-blue-800 underline'>
          Go to home page
        </Link>
      </div>
      <img src='/login_1.svg' className='absolute bottom-0 left-0 hidden w-[25%] lg:block' alt='' />
      <img src='/login_2.svg' className='absolute bottom-0 right-0 hidden w-[25%] lg:block' alt='' />
    </div>
  )
}

export default login
