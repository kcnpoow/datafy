import { Suspense } from 'react';

import Search from '@/app/components/Search';
import SearchList from '@/app/components/SearchList';

export default function HomePage() {
  return (
    <main>
      <h1>Companies</h1>

      <Suspense>
        <Search />
        <SearchList />
      </Suspense>
    </main>
  );
}
