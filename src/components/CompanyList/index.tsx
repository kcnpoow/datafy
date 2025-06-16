import CompanySkeleton from './CompanySkeleton';
import CompanyCard from '../CompanyCard';
import Company from '@/lib/types/Company';

type Props = { companies: Company[]; loading?: boolean };

export default function CompanyList({ companies, loading }: Props) {
  return (
    <ul className='flex flex-col gap-y-6'>
      {!loading && companies.map((company) => (
        <li key={company.id}>
          <CompanyCard company={company} />
        </li>
      ))}

      {loading && (
        <>
          <CompanySkeleton />
          <CompanySkeleton />
          <CompanySkeleton />
          <CompanySkeleton />
        </>
      )}
    </ul>
  );
}
