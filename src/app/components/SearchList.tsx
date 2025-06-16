'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import Company from '@/lib/types/Company';
import CompanyList from '@/components/CompanyList';
import companyService from '@/services/companyService';
import useDebounce from '@/lib/hooks/useDebounce';

export default function SearchList() {
  const searchParams = useSearchParams();

  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCompanies = useDebounce(async () => {
    setIsLoading(true);

    try {
      const result = await companyService.searchCompanies();

      setCompanies(result);
    } finally {
      setIsLoading(false);
    }
  }, 500);

  useEffect(() => {
    setIsLoading(true);

    fetchCompanies();
  }, [searchParams]);

  return (
    <div className='pt-5.5'>
      {!isLoading && (
        <p className='mb-5.5'>
          {companies.length > 0 ? (
            <>
              Результаты поиска -{' '}
              <span className='text-primary'>
                {companies.length} найденных компаний
              </span>
            </>
          ) : (
            'Компаний не найдено'
          )}
        </p>
      )}

      <CompanyList companies={companies} loading={isLoading} />
    </div>
  );
}
