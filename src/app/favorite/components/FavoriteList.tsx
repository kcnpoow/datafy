'use client';

import { useEffect, useState } from 'react';

import Company from '@/lib/types/Company';
import CompanyList from '@/components/CompanyList';
import companyService from '@/services/companyService';
import { FAVORITES_KEY } from '@/lib/consts';

export default function FavoriteList() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const stored = localStorage.getItem(FAVORITES_KEY);

        if (!stored) return;

        let ids: number[] = [];
        try {
          ids = JSON.parse(stored);
        } catch (error) {
          return;
        }

        if (ids.length === 0) return;

        const result = await companyService.getCompaniesByIds(ids);
        setCompanies(result);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  return <CompanyList companies={companies} loading={isLoading} />;
}
