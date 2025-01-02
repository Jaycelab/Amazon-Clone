'use client'

import { ChevronUp } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className='bg=black text-white underline-link'>
      <div className='w-full'>
        <Button
          variant='ghost'
          className='bg-gray-800 w-full rounded-none'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className='mr-2 h-4 w-4' />
          Back to top
        </Button>
      </div>

      <div className='p-4'>
        <div className='flex justify-center gap-3 text-sm'>
          <Link href='/page/conditions-of-use'>Conditions of Use</Link>
          <Link href='/page/privacy-policy'>Privacy Notice</Link>
          <Link href='pages/help'>Help</Link>
        </div>
        <div className='flex justify-center text-sm text-gray-400'>
          <p>@ 2024 {APP_NAME}, Inc. Website created by Jayce</p>
        </div>
        <div className='mt-8 flex justify-center text-sm text-gray-400'>
          <p>123 Disneyland Drive, Anaheim, CA 12345 | +1 (714) 123-4567</p>
        </div>
      </div>
    </footer>
  )
}