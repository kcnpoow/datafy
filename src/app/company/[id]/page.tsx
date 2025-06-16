import RevenueChart from './components/RevenueChart';
import companies from '@/lib/companies.json';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CompanyDetails({ params }: Props) {
  const { id } = await params;

  const company = companies.find((c) => c.id === Number(id));

  if (!company) {
    return <p>Компания не найдена</p>;
  }

  return (
    <>
      <h1>{company.name}</h1>

      <RevenueChart revenues={company.revenues} />
    </>
  );
}
