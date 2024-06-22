import { Board, User } from '@/interfaces'
import React from 'react'
import DeleteBoard from './DeleteBoard'
import AddBoardMembers from './AddBoardMembers'

const BoardNavbar = async ({ board }: { board: Board }) => {
  return (
    <div className='flex h-14 w-full items-center justify-between bg-black/50 px-5'>
      <h2 className='text-xl font-bold text-white'>{board?.title}</h2>
      <div className='flex gap-5'>
        {board?.Users?.map((user: User) => <img src={user?.image} className='h-7 w-7 cursor-pointer rounded-full' alt='' />)}
        <AddBoardMembers board={board} />
        <DeleteBoard board={board} />
      </div>
    </div>
  )
}

export default BoardNavbar
