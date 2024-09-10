import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {

  const Menu = [
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'About Us',
      path: '/about-us'
    },
    {
      id: 3,
      name: 'Explore',
      path: '/explore'
    },
    {
      id: 4,
      name: 'Contact Us',
      path: '/contact-us'
    },
  ]

  return (
    <header className='flex items-center justify-between p-4 shadow-sm w-full'>
      <nav className='flex items-center gap-10'>
        <Image src={'./images/logo.svg'} width={180} height={80} alt='logo' />
        <ul className='md:flex gap-8 hidden'>
          {Menu.map((item, index) => (
            <Link key={item.id} href={item.path}>
              <li className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>{item.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <Button>Get Started</Button>
    </header>
  )
}

export default Header