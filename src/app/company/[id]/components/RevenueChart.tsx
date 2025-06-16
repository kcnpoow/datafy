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
        borderColor: '#4147BF',
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value: number | string) {
            return value + ' млрд';
          },
        },
      },
    },
  };
  return (
    <div className='panel'>
      <h3 className='mb-6 text-xl font-semibold'>Доходы компании</h3>

      <div style={{ height: '330px' }}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
