'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

import Select from '@/components/Select';
import SelectOption from '@/lib/types/SelectOption';
import Button from '@/components/Button';
import useParams from '@/lib/hooks/useParams';
import { CITIES } from '@/lib/consts';

const cityOptions: SelectOption[] = Object.entries(CITIES).map(
  ([key, value]) => ({
    value: key,
    label: value,
  })
);
const statuses: SelectOption[] = [
  { value: 'active', label: 'Действует' },
  { value: 'inactive', label: 'Не действует' },
];

type Props = { opened: boolean; onClose: () => void };

export default function FiltersPanel({ opened, onClose }: Props) {
  const { setParams, deleteParams, getParam } = useParams();

  const [city, setCity] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handleApplyClick = () => {
    setParams({
      city: city || '',
      status: status || '',
    });

    onClose();
  };

  const handleResetClick = () => {
    deleteParams('city', 'organization', 'status');

    setCity(null);
    setStatus(null);

    onClose();
  };

  useEffect(() => {
    const city = getParam('city');
    const status = getParam('status');

    setCity(city);
    setStatus(status);
  }, []);

  return (
    <div
      className={clsx('flex flex-col min-h-[488px] mt-6 !px-12 !py-8 panel', {
        hidden: !opened,
      })}
    >
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(auto,_424px))] gap-x-20 gap-y-6'>
        <div>
          <h5 className='mb-6 text-[20px] font-semibold'>По городам</h5>

          <Select
            options={cityOptions}
            placeholder='Выбрать город'
            onChange={(value) => setCity(value)}
            selected={city}
          />
        </div>

        <div>
          <h5 className='mb-6 text-[20px] font-semibold'>По статусу</h5>

          <Select
            options={statuses}
            placeholder='Выбрать статус'
            onChange={(value) => setStatus(value)}
            selected={status}
          />
        </div>
      </div>

      <div className='mt-auto pt-8'>
        <Button className='mr-2' onClick={handleApplyClick}>
          Фильтровать
        </Button>

        <Button className='mt-2' variant='outlined' onClick={handleResetClick}>
          Сбросить
        </Button>
      </div>
    </div>
  );
}
