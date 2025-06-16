import Link from 'next/link';

export default function Nav() {
  return (
    <ul className='flex gap-4 font-semibold max-md:flex-col'>
      <li>
        <Link href='/favorite'>Избранное</Link>
      </li>
      <li>
        <Link href='#'>Тарифы</Link>
      </li>
      <li>
        <Link href='#'>Поддержка</Link>
      </li>
    </ul>
  );
}
