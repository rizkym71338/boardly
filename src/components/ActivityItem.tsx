import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar'
import { auditLogs } from '@/lib/auditLogs'

const ActivityItem = ({ item }: { item: any }) => {
  return (
    <div className='mb-4 flex items-center gap-3'>
      <Avatar className='h-8 w-8'>
        <AvatarImage src={item?.userImage} />
      </Avatar>
      <div className='flex flex-col text-sm text-slate-400'>
        <span className='truncate text-slate-700'>
          {item?.userName} {auditLogs(item)}
        </span>
        {/* <span className="">{item?.createdAt}</span> */}
      </div>
    </div>
  )
}

export default ActivityItem
