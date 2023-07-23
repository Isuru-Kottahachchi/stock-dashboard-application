import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const LastMonthBarChart = () => {

    const [data, setData] = useState({

        labels: [],
        datasets: [
            {
                label: 'Low value',
                backgroundColor: '#8A2BE2',
                borderColor: '#8A2BE2',
                borderWidth: 1,
                data: [],
            },
            {
                label: 'High Value',
                backgroundColor: '#2BEBC8',
                borderColor: '#2BEBC8',
                borderWidth: 1,
                data: [],
            },
        ],
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const apiKey = 'bBvdgYkl6gTEp6kTK8GKhVrHnq8MN1R_';
        const stockSymbol = 'AAPL';
        const currentDate = new Date();
        const lastMonth = new Date(currentDate);
        
        lastMonth.setMonth(lastMonth.getMonth() - 1); // Set to last month

        // Get the 30 days of last month
        const lastMonthDates = [];
        for (let i = 1; i <= 30; i++) {
            const date = new Date(lastMonth.getFullYear(), lastMonth.getMonth(), i);
            lastMonthDates.push(date.toISOString().split('T')[0]);
        }

        try {
            const response = await axios.get(
                `https://api.polygon.io/v2/aggs/ticker/${stockSymbol}/range/1/day/${lastMonthDates[0]}/${lastMonthDates[29]}?unadjusted=true&sort=asc&apiKey=${apiKey}`
            );
            const stockData = response.data.results;
            const labels = stockData.map((item) => new Date(item.t).toLocaleDateString());
            const highValues = stockData.map((item) => item.h);
            const lowValues = stockData.map((item) => item.l);

            setData({

                labels,
                datasets: [
                    {
                        ...data.datasets[0],
                        data: lowValues,
                    },
                    {
                        ...data.datasets[1],
                        data: highValues,
                    },
                ],
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const options = {

        responsive: true,
        barThickness: 10,
        scales: {
            y: {
                max: 200, // Set the maximum value for the y-axis to control the bar heights
            },
        },
    };

    return (
        <div className='LastMonthBarChart' style={{ width: '780px', height: '400px', marginLeft: '10px', marginRight: '50px' }}>
            <h3>Last Month High/Low Values</h3>
            <Bar data={data} options={options} />
        </div>
    );
};

export default LastMonthBarChart;
