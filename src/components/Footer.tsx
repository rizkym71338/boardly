import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
          <span className='flex text-sm text-gray-500 sm:text-center'>
            © 2024 <li className='ml-4 hover:underline'>Boardly</li>. All Rights Reserved.
          </span>
          <ul className='mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0'>
            <li className='me-4 hover:underline md:me-6'>About</li>
            <li className='me-4 hover:underline md:me-6'>Privacy Policy</li>
            <li className='me-4 hover:underline md:me-6'>Licensing</li>
            <li className='hover:underline'>Contact</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
