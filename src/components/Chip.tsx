import { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  className?: string;
  children: ReactNode;
  variant: 'success' | 'info' | 'error';
} & HTMLAttributes<HTMLSpanElement>;

export default function Chip({ className, variant, ...props }: Props) {
  return (
    <span
      className={clsx(
        'px-2.5 py-1 rounded-sm',
        {
          'text-onSuccess bg-success/15': variant === 'success',
          'text-info bg-info/15': variant === 'info',
          'text-red-500 bg-red-600/15': variant === 'error',
        },
        className
      )}
      {...props}
    />
  );
}
