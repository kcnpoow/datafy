'use client';

import { MouseEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import Button from '../Button';
import { FAVORITES_KEY } from '@/lib/consts';

type Props = { companyId: number };

export default function FavoriteButton({ companyId }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');

    setIsFavorite(favorites.includes(companyId));
  }, [companyId]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const favorites: number[] = JSON.parse(
      localStorage.getItem(FAVORITES_KEY) || '[]'
    );

    let updated;
    if (favorites.includes(companyId)) {
      updated = favorites.filter((favoriteId) => favoriteId !== companyId);
    } else {
      updated = [...favorites, companyId];
    }
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));

    setIsFavorite((prev) => !prev);
  };

  return (
    <Button
      className='float-right !p-1'
      color={isFavorite ? 'primary' : 'secondary'}
      onClick={handleClick}
    >
      <Image
        className={clsx('', { 'not-dark:invert': !isFavorite })}
        src='/images/bookmark.svg'
        alt='Bookmark'
        width={24}
        height={24}
      />
    </Button>
  );
}
