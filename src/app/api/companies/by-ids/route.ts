import Company from '@/lib/types/Company';
import companies from '@/lib/companies.json';

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  
  const idsParam = searchParams.get('ids');

  let filtered: Company[] = [];

  if (idsParam) {
    const ids = idsParam.split(',').map((id) => id.trim());

    filtered = companies.filter((company) => ids.includes(String(company.id)));
  }

  return Response.json(filtered);
}
