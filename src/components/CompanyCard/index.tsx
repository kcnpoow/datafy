import { useRouter } from 'next/navigation';

import FavoriteButton from './FavoriteButton';
import Detail from './Detail';
import Chip from '../Chip';
import Company from '@/lib/types/Company';

type Props = {
  company: Company;
};

export default function CompanyCard({ company }: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/company/${company.id}`);
  };

  return (
    <article className='panel cursor-pointer' onClick={handleClick}>
      <FavoriteButton companyId={company.id} />

      <div className='flex flex-col gap-y-3'>
        <h6 className='font-semibold'>{company.name}</h6>

        <p>
          <Chip className='mr-2' variant='info'>
            ЮЛ
          </Chip>

          <Chip variant={company.status ? 'success' : 'error'}>
            {company.status ? 'Действует' : 'Не действует'}
          </Chip>
        </p>

        <Detail title='БИН' text={company.bin} />
        <Detail title='Адрес' text={company.address} />
        <Detail title='Вид деятельности' text={company.activity} />
        <Detail
          title='Руководитель'
          text={company.director}
          textClassName='uppercase'
        />
      </div>
    </article>
  );
}
