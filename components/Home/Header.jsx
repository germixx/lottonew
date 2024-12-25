import Link from 'next/link';

// components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 bg-red-800">
        <div className='container mx-auto flex justify-between items-center'>
            <Link href="/">
                <h1 className='text-4xl font-semibold'>
                    Lotto
                </h1>
            </Link>
            {/* desktop nav */}
            <div className='hidden xl:flex items-center gap-8'>
                <Nav />
            </div>
            {/* mobile */}
            <div className='xl:hidden'>

            </div>
        </div>
        
    </header>
  )
}

export default Header;