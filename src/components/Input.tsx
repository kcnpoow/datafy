import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: Props) {
  return (
    <input
      {...props}
      className={clsx(
        'py-3.5 px-4 not-dark:border border-stroke rounded-md dark:bg-control min-w-0',
        className
      )}
    />
  );
}
