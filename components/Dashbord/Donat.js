'use client'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend,Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend,Title);





export const data = {
  //labels: ['current', 'estimate',],
  datasets: [
    {
      //label: ['Red', 'Blue',],
      data: [10811, 21065,],
      backgroundColor: [
        'rgba(242, 166, 185, 0.8)',
        'rgba(166, 242, 237, 0.8)',
        
      ],
      borderColor: [
        'rgba(242, 166, 185, 0.8)',
        'rgba(166, 242, 237, 0.8)',
        
      ],
      borderWidth: 1,
    },
  ],
};

export function Donat() {
  return <Doughnut data={data} />;
}
