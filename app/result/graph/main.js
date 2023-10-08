"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function Graph({ data2, className }) {
  const options = {
    responsive: false,
    plugins: {},
    animation: {
      duration: 500,
    },
  };

  const labels = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 34, 35, 36, 37, 28, 29, 30,
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Severity Graph",
        backgroundColor: "rgba(82, 120, 204, 0.2)",
        data: data2,
        borderColor: "rgba(82, 120, 204, 1)",
      },
    ],
  };
  return (
    <Line className={`h-[0%] ${className}`} options={options} data={data} />
  );
}
