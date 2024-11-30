'use client';
import Nav from './Nav';

import Link from 'next/link';

const Header = () => {
  return (
    <header className=' bg-green-300'>
      <div className='mx-auto'>
        <Nav />
      </div>
    </header>
  )
}

export default Header;