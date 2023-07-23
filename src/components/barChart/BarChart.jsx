import React from 'react'
import "./barChart.scss"
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


const data = {

  labels: ['1', '2', '3', '4', '5', '6'],
  
  datasets: [
    {
      label: 'Bar Chart',
      backgroundColor: '#8A2BE2', // Color of the bars
      borderColor: 'rgba(255, 99, 132, 1)', // Border color of the bars
      borderWidth: 0,
      data: [10, 35, 70, 35, 20, 35], // Data values for the bars
    },
  ],
};

const options = {
  responsive: true,
  barThickness: 40,

};

const BarChart = () => {

  return (

    <div className='barChart' style={{ width: '390px', height: '160px', marginLeft: '10px' }}>
      
      <h3>Bar Chart</h3>
      <Bar data={data} options={options} />
      
    </div>
  )

};

export default BarChart