import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type Props = {
  color?: 'primary' | 'secondary';
  variant?: 'contained' | 'outlined';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  className,
  color = 'primary',
  variant = 'contained',
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        'py-3.5 px-6 whitespace-nowrap rounded-sm',
        {
          'text-white font-semibold bg-primary hover:bg-primary/90':
            color === 'primary' && variant === 'contained',
          'bg-secondary font-semibold hover:bg-secondary/80':
            color === 'secondary' && variant === 'contained',

          'text-primary border border-primary hover:bg-gray-50':
            color === 'primary' && variant === 'outlined',
        },
        className
      )}
      {...props}
    />
  );
}
