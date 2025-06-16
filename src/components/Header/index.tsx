import Link from 'next/link';
import Image from 'next/image';

import Menu from './Menu';

export default function Header() {
  return (
    <header className='bg-white dark:bg-panel border-stroke shadow-md not-dark:border-b-1'>
      <div className='container relative flex items-center py-3 md:py-4.5'>
        <Link className='mr-4' href='/'>
          <Image
            className='dark:invert'
            src='/images/logo.svg'
            width={99}
            height={28}
            alt='Logo'
          />
        </Link>

        <Menu />
      </div>
    </header>
  );
}
