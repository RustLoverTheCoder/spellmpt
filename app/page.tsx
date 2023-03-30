import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <div className='text-2xl'>spellmpt</div>
    </div>
  )
}
