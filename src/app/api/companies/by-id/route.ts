import companies from '@/lib/companies.json';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  const company = companies.filter((company) => company.id);

  console.log(params);

  return Response.json(company);
}
