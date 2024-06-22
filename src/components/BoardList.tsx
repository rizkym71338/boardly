import { Users2 } from 'lucide-react'
import React from 'react'
import CreateBoardPopup from './CreateBoardPopup'
import { Board } from '@/interfaces'
import Link from 'next/link'

interface orgProps {
  getOrganization: any
}

const BoardList = ({ getOrganization }: orgProps) => {
  console.log(getOrganization)
  return (
    <div>
      <div className='flex items-center text-lg font-bold'>
        <Users2 className='mr-2 h-6 w-6' />
        Your Boards
      </div>
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4'>
        {getOrganization?.boards?.map((board: Board) => (
          <Link
            key={board.id}
            href={`/board/${board.id}`}
            className='group relative aspect-video h-24 w-40 overflow-hidden bg-cover bg-center bg-no-repeat p-2'
            style={{ backgroundImage: `url(${board.image})` }}
          >
            {' '}
            <div className='absolute inset-0 bg-black/30 transition group-hover:bg-black/40' />
            <p className='relative text-center font-medium text-white'>{board.title}</p>
          </Link>
        ))}
        <CreateBoardPopup />
      </div>
    </div>
  )
}

export default BoardList
