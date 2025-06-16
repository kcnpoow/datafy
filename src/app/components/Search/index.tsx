'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Image from 'next/image';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import useParams from '@/lib/hooks/useParams';
import FiltersPanel from './FiltersPanel';

export default function Search() {
  const { setParam, getParam } = useParams();

  const [search, setSearch] = useState('');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParam('search', e.target.value);
    setSearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleFiltersClick = () => {
    setIsFiltersOpen((prev) => !prev);
  };

  useEffect(() => {
    const search = getParam('search');

    if (search) {
      setSearch(search);
    }
  }, []);

  return (
    <>
      <form className='flex gap-x-2' onSubmit={handleSubmit}>
        <Input
          className='flex-1'
          type='search'
          placeholder='Поиск по БИН/ИИН или фамилии'
          value={search}
          onChange={handleChange}
        />

        <Button className='max-sm:hidden' type='submit'>
          Начать поиск
        </Button>

        <Button
          className='flex gap-x-2'
          color='secondary'
          type='button'
          onClick={handleFiltersClick}
        >
          <Image
            className='pointer-events-none dark:invert'
            src='/images/filter.svg'
            alt='Filter'
            width={24}
            height={24}
            onClick={handleFiltersClick}
          />
          <span className='max-sm:hidden'>Фильтры</span>
        </Button>
      </form>

      <FiltersPanel
        opened={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
      />
    </>
  );
}
