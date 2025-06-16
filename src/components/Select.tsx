import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import SelectOption from '@/lib/types/SelectOption';

type Props = {
  options: SelectOption[];
  placeholder: string;
  selected?: string | null;
  onChange: (value: string) => void;
};

export default function Select({
  options,
  placeholder,
  onChange,
  selected: selectedValue,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  );
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: SelectOption) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
  };

  useEffect(() => {
    const match = options.find((opt) => opt.value === selectedValue) || null;
    setSelectedOption(match);
  }, [selectedValue, options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative select-none' ref={selectRef}>
      <div
        className={clsx(
          'flex justify-between items-center px-4 py-3 bg-control rounded-lg cursor-pointer not-dark:hover:bg-gray-200',
          {
            'not-dark:bg-gray-200': isOpen,
          }
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={clsx({ 'text-gray-400': !selectedOption })}>
          {selectedOption?.label || placeholder}
        </span>

        <Image
          src='/images/arrow-down.svg'
          alt='Arrow down'
          width={12}
          height={4}
        />
      </div>

      {isOpen && (
        <ul className='absolute overflow-y-auto z-10 mt-1 w-full max-h-60 panel overscroll-none dark:!bg-control'>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className='px-4 py-2 hover:bg-gray-100 cursor-pointer dark:hover:bg-zinc-700'
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
