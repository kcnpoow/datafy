'use client';

import { useRef, useState, useEffect } from 'react';

import Nav from './Nav';
import ThemeSwitcher from './ThemeSwitcher';
import Button from '@/components/Button';
import clsx from 'clsx';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };



  return (
    <>
      <Button
        className='ml-auto max-md:!p-3 md:hidden'
        color='secondary'
        onClick={handleToggle}
      >
        <span className='block w-6 h-1 mb-1 bg-gray-400 dark:bg-primary rounded-lg'></span>
        <span className='block w-6 h-1 mb-1 bg-gray-400 dark:bg-primary rounded-lg'></span>
        <span className='block w-6 h-1 bg-gray-400 dark:bg-primary rounded-lg'></span>
      </Button>

      <div
        ref={menuRef}
        className={clsx(
          'max-md:absolute max-md:top-16 max-md:right-4 max-md:z-10 max-md:w-fit max-md:p-6 max-md:bg-panel max-md:border max-md:border-stroke max-md:rounded-md max-md:shadow md:flex md:items-center md:gap-x-4 w-full',
          {
            'max-md:hidden': !isOpen,
          }
        )}
      >
        <Nav />

        <ThemeSwitcher />
      </div>
    </>
  );
}
