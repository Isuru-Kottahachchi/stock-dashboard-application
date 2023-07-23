import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import "./doughnutChart.scss"


const DoughnutChart = () => {

    const doughnutChartData = {
        labels: [' 1st', '2nd', '3rd'],
        datasets: [
            {
                data: [300, 280, 200],
                backgroundColor: ['#fd5e53', '#8A2BE2', '#2BEBC8'],
                borderColor: ['#fd5e53', '#8A2BE2', '#2BEBC8'],
                borderWidth: 1,
                weight: 2,
            },
        ],
    };

    const doughnutChartOptions = {
        responsive: false,
        maintainAspectRatio: false,
        cutoutPercentage: 50,
    };


    return (

        <div className='doughnutChart'>

            <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
        </div>
    )
}
export default DoughnutChart;
