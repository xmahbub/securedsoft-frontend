'use client'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const labels = [
   14, 15, 16,
];

export const data = {
  labels,
  datasets: [
    {
      label: 'cpu',
      data: [
        677.1085869999986,
        676.9345670000001,
        658.1597379999994,
        
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'memory',
      data: [
        577.1085869999986,
        676.9345670000001,
        458.1597379999994,
        
        
      ],
      backgroundColor: 'rgba(166, 242, 237, 0.8)',
    },
    {
      label: 'network',
      data: [
        777.1085869999986,
        676.9345670000001,
        458.1597379999994,
        
        
      ],
      backgroundColor: 'rgba(242, 166, 185, 0.8)',
    },
  ],
};

export function Barc() {
  return <Bar className='w-full'  data={data} />;
}
