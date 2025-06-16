'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function useParams() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const setParams = (paramsObj: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(paramsObj).forEach(([key, value]) => {
      params.set(key, value);
    });

    router.push(`${pathname}?${params.toString()}`);
  };

  const deleteParams = (...keys: string[]) => {
    const params = new URLSearchParams(searchParams.toString());
    keys.forEach((key) => params.delete(key));
    router.push(`${pathname}?${params.toString()}`);
  };

  const getParam = (key: string): string | null => {
    return searchParams.get(key);
  };

  return {
    setParams,
    deleteParams,
    getParam,
  };
}
