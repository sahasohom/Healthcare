import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"bar"> = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      display: false,
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const data: ChartData<"bar"> = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [
        [2, 6],
        [3, 7],
        [2, 5],
        [3, 6],
        [4, 8],
        [1, 7],
        [2, 5],
      ],
      backgroundColor: "rgba(0,255,255,0.6)",
      barPercentage: 0.5,
      categoryPercentage: 0.5,
    },
    {
      label: "Dataset 2",
      data: [
        [1, 4],
        [2, 5],
        [1, 3],
        [2, 5],
        [3, 6],
        [1, 5],
        [1, 3],
      ],
      backgroundColor: "rgba(0,0,255,0.6)",
      barPercentage: 0.5,
      categoryPercentage: 0.5,
    },
    {
      label: "Dataset 3",
      data: [
        [3, 4],
        [1, 3],
        [2, 4],
        [1, 3],
        [2, 5],
        [1, 3],
        [2, 4],
      ],
      backgroundColor: "rgba(180,180,180,0.6)",
      barPercentage: 0.5,
      categoryPercentage: 0.5,
    },
    {
      label: "Dataset 4",
      data: [
        [1, 2],
        [1, 3],
        [1, 5],
        [1, 2],
        [2, 3],
        [1, 2],
        [1, 2],
      ],
      backgroundColor: "rgba(100,100,255,0.6)",
      barPercentage: 0.5,
      categoryPercentage: 0.5,
    },
  ],
};

const BarChart: React.FC = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;
