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
    responsive: true,
    plugins: {},
  };

  const labels = [0, 6, 12, 24, 30];

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
  return <Line className={`h-[200vh] ${className}`} options={options} data={data} />;
}
