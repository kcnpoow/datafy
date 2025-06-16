import { Open_Sans } from 'next/font/google';

import './globals.css';
import Header from '@/components/Header';

const open_sans = Open_Sans();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru' className={open_sans.className}>
      <head>
        <title>DataFy</title>
      </head>
      <body className='bg-[#FBFAFF] dark:text-white dark:bg-[#121212] antialiased'>
        <Header />

        <main className='container py-6'>{children}</main>
      </body>
    </html>
  );
}
