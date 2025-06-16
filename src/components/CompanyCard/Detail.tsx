type Props = {
  title: string;
  text: string | number;
  textClassName?: string;
};

export default function Detail({ title, text, textClassName }: Props) {
  return (
    <p className='truncate'>
      <span className='text-gray-400'>{title}: </span>
      <span className={textClassName}>{text}</span>
    </p>
  );
}
