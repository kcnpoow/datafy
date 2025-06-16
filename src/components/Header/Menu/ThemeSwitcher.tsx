'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

export default function ThemeSwitcher() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeChange = () => {
    setIsDarkTheme((prev) => {
      const newIsDarkTheme = !prev;

      if (newIsDarkTheme) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }

      return newIsDarkTheme;
    });
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');

    setIsDarkTheme(theme === 'dark');
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

  return (
    <div className='relative ml-auto max-md:mt-4'>
      <input
        className='hidden'
        id='themeSwitcher'
        type='checkbox'
        checked={isDarkTheme}
        onChange={handleThemeChange}
      />

      <label
        className='block w-17 h-8 bg-control rounded-full inset-shadow-sm cursor-pointer'
        htmlFor='themeSwitcher'
      />

      <div
        className={clsx(
          'absolute top-1/2 left-1 -translate-y-1/2 flex items-center justify-center w-6 h-6 bg-white rounded-full transition-transform pointer-events-none',
          {
            'translate-x-9': isDarkTheme,
          }
        )}
      >
        {isDarkTheme ? null : (
          <Image src='/images/sun.svg' alt='Sun' width={19} height={19} />
        )}
      </div>
    </div>
  );
}
