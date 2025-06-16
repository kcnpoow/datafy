import Search from '@/app/components/Search';
import SearchList from '@/app/components/SearchList';

export default function HomePage() {
  return (
    <>
      <h1>Поиск контрагента</h1>

      <Search />

      <SearchList />
    </>
  );
}
