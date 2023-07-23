
import React, { useState } from 'react';
import "./dashboard.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import SecondRowWidgets from '../../components/SecondRowWidgets/SecondRowWidgets'
import BarChart from '../../components/barChart/BarChart'
import ChartContainer from '../../components/chartContainer/ChartContainer';

const Dashboard = () => {

    const [selectedDate, setSelectedDate] = useState('');
    const [highValue, setHighValue] = useState(null);
    const [lowValue, setLowValue] = useState(null);
    const [openValue, setOpenValue] = useState(null);

    //Callback functions to fetch data from child component
    const handleHighValue = (high) => {
        console.log('High Value received in parent:', high);
        setHighValue(high);
    };

    const handleLowValue = (low) => {
        console.log('Low Value received in parent:', low);
        setLowValue(low);
    };

    const handleOpenValue = (open) => {
        console.log('Open Value received in parent:', open);
        setOpenValue(open);
    };

    const handleSelectedDate = (date) => {
        setSelectedDate(date);
    }

    console.log("Date " + selectedDate)

    return (

        <div className='home'>

            <Sidebar />

            <div className='homeContainer'>

                <Navbar onHighValueChange={handleHighValue} onLowValueChange={handleLowValue} onOpenValueChange={handleOpenValue} onSelectedDate={handleSelectedDate} />

                <div className='widgets'>

                    <Widget />
                    <BarChart />

                </div>

                <div className='widgetSecondLine'>

                    <SecondRowWidgets type="High" value={highValue} date={selectedDate} />
                    <SecondRowWidgets oWidgets type="Low" value={lowValue} date={selectedDate} />
                    <SecondRowWidgets oWidgets type="Open" value={openValue} date={selectedDate} />

                </div>

                <div className='charts' >

                    <ChartContainer />

                </div>

            </div>
        </div>

    )
}

export default Dashboard
