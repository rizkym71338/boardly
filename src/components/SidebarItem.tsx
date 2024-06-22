'use client'
import React from 'react'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Organization } from '@/interfaces'
import Image from 'next/image'
import { Activity, Layout } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'

const SidebarItem = ({ org }: { org: Organization }) => {
  const router = useRouter()
  const pathname = usePathname()
  const routes = [
    {
      label: 'Boards',
      icon: <Layout className='mr-2 h-4 w-4' />,
      href: `/organizations/${org.id}`,
    },
    {
      label: 'Activity',
      icon: <Activity className='mr-2 h-4 w-4' />,
      href: `/organizations/${org.id}/activity`,
    },
    {
      label: 'Members',
      icon: <Activity className='mr-2 h-4 w-4' />,
      href: `/organizations/${org.id}/members`,
    },
  ]

  return (
    <AccordionItem value={org?.id} className='border-none'>
      <AccordionTrigger>
        <div className='flex items-center gap-x-2'>
          <div className='relative h-7 w-7'>
            <Image fill src={org?.image} alt={org?.title} className='rounded-sm object-cover' />
          </div>
          <span className='text-sm font-medium'>{org?.title}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className=''>
        {routes?.map((route) => (
          <Button
            key={route.href}
            onClick={() => router.push(route.href)}
            className={cn('mb-1 w-full justify-start pl-10 font-normal', pathname == route.href && 'bg-sky-500/10 text-sky-700')}
            variant='ghost'
          >
            {route.icon}
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}

export default SidebarItem
