'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'profile',
        path: '/profile'
    },
    {
        name: 'about',
        path: '/'
    },
]

const Nav = () => {

    const pathname = usePathname();

  return (
    <nav className='flex gap-8'>
        {links.map((link, index)=> {
            return <Link href={link.path} key={index} className={``}>{link.name}</Link>
        })}
    </nav>
  )
}

export default Nav;