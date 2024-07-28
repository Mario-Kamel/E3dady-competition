import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ScoreChart = ({ oldScores, newScores }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      chart.data.datasets[0].data = oldScores;
      chart.update();
      setTimeout(() => {
        const chart = chartRef.current; // Re-fetch the chart reference
        if (chart) {
          chart.data.datasets[0].data = newScores;
          chart.update();
        }
      }, 500); // Delay for animation
    }
  }, [oldScores, newScores]);

  const labels = ['أولي إعدادي (الله المعين)', 'ثانية إعدادي (علي بركة الله)', 'ثالثة إعدادي (على الله حكايتهم)']

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'السكور',
        data: oldScores,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    animation: {
      duration: 1000, // Animation duration
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 32, // Increase font size
          },
          color: 'black', // Set font color to black
        },
      },
    },
  };

  return <Bar ref={chartRef} data={data} options={options} />;
};

export default ScoreChart;