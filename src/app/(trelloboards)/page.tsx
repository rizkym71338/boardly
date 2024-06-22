import Header from '@/components/Header'
import PlansComp from '@/components/PlansComp'
import Productivity from '@/components/Productivity'
import { Workflow } from '@/components/Workflow'

export default function Home() {
  return (
    <main className=''>
      <Header />
      <div className='bg-[#e6fafc] py-16'>
        <Productivity />
        <Workflow />
        <PlansComp />
      </div>
    </main>
  )
}
