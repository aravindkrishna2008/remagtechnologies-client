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

export default function Graph({ data2, className, data3 }) {
  const options = {
    responsive: false,
    plugins: {},
    animation: {
      duration: 500,
    },
    maintainAspectRatio: false,
  };

  const labels = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Recon",
        backgroundColor: "rgba(82, 120, 204, 0.2)",
        data: data2,
        borderColor: "rgba(82, 120, 204, 1)",
      },

      {
        fill: true,
        Selection: "false",
        label: "Severity (0-1)",
        data: data3,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <Line
      className={`h-[0%] ${className}`}
      width={"500px"}
      height={"300px"}
      options={options}
      data={data}
    />
  );
}
