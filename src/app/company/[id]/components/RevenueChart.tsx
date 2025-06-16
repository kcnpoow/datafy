'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  revenues: Record<string, number>;
};

export default function RevenueChart({ revenues }: Props) {
  const labels = Object.keys(revenues);
  const data = Object.values(revenues);

  const chartData = {
    labels,
    datasets: [
      {
        data,
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Доходы компании`,
        font: {
          size: 20,
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className='panel'>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}
