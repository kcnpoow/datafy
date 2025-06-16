import { NextResponse } from 'next/server';

import companies from '@/lib/companies.json';
import { CITIES } from '@/lib/consts';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  let result = companies;

  const searchParam = searchParams.get('search');
  const cityParam = searchParams.get('city');
  const statusParam = searchParams.get('status');

  if (searchParam) {
    result = result.filter(
      (company) =>
        company.name.toLowerCase().includes(searchParam.toLowerCase()) ||
        company.bin.toString().includes(searchParam)
    );
  }

  if (statusParam === 'active') {
    result = result.filter((company) => company.status === true);
  } else if (statusParam === 'inactive') {
    result = result.filter((company) => company.status === false);
  }

  if (cityParam) {
    const cityName = CITIES[cityParam].toLowerCase();

    result = result.filter((company) =>
      company.address.toLowerCase().includes(cityName)
    );
  }

  return NextResponse.json(result);
}
