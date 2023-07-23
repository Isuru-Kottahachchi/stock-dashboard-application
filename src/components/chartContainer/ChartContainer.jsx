import React from 'react';
import "./chartContainer.scss"
import { Bar, Pie } from 'react-chartjs-2';
import LastMonthBarChart from '../lastMonthBarChart/LastMonthBarChart';
import DoughnutChart from '../doughnutChart/DoughnutChart';

const ChartContainer = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

            <div className="lastMonthChart" style={{ flex: 1 }}>

                <LastMonthBarChart />
                
            </div>

            <div className="donutChart" style={{ flex: 1 }}>

                <h3> Top Market share gainer's chart</h3>

                <div className="donutComp">
                    <DoughnutChart />
                </div>

            </div>
        </div>
    );
};
export default ChartContainer