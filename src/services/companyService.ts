import Company from '@/lib/types/Company';
import { SERVER_URL } from '@/lib/consts';

class CompanyService {
  async searchCompanies(): Promise<Company[]> {
    const params = new URLSearchParams(window.location.search);
    const url = `${SERVER_URL}/api/companies?${params.toString()}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch companies: ${response.statusText}`);
    }

    return await response.json();
  }

  async getCompaniesByIds(ids: number[]): Promise<Company[]> {
    if (ids.length === 0) return [];

    const params = new URLSearchParams({ ids: ids.join(',') });
    const url = `${SERVER_URL}/api/companies/by-ids?${params.toString()}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch companies by IDs: ${response.statusText}`
      );
    }

    return await response.json();
  }
}

const companyService = new CompanyService();
export default companyService;
