
import React from 'react'
import { useState, useEffect } from 'react';
import "./navbar.scss"
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import proPic from "./IUK.JPG";


const Navbar = ({ onHighValueChange, onLowValueChange, onOpenValueChange, onSelectedDate }) => {

    const [selectedDate, setSelectedDate] = useState('');
    const [highValue, setHighValue] = useState(null);
    const [lowValue, setLowValue] = useState(null);
    const [openValue, setOpenValue] = useState(null);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const fetchData = () => {

        const apiKey = 'bBvdgYkl6gTEp6kTK8GKhVrHnq8MN1R_';
        const stockSymbol = 'AAPL';
        const apiUrl = `https://api.polygon.io/v1/open-close/${stockSymbol}/${selectedDate}?adjusted=true&apiKey=${apiKey}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                // Extract high, low, and open values from the data
                setHighValue(data.high);
                setLowValue(data.low);
                setOpenValue(data.open);

                onSelectedDate(data.date);
                onHighValueChange(data.high);
                onLowValueChange(data.low);
                onOpenValueChange(data.open);
            })
            .catch((error) => console.error('Error fetching data:', error));
    };

    //Triggering the data fetching process when the selectedDate state changes.
    useEffect(() => {
        if (selectedDate) {
            fetchData();
        }
    }, [selectedDate]);

    console.log("High value is " + highValue)

    return (

        <div className="navbar" >

            <div className="wrapper">

                <div className="search-container">
                    <b>Choose a date</b>
                    <input
                        type="date"
                        className="calender"
                        value={selectedDate}
                        onChange={handleDateChange}
                    />

                </div>

                <div className="items">

                    <div className="item">

                        <NotificationAddOutlinedIcon />

                    </div>

                    <div className="vertical-line" />

                    <div className="item">

                        <b>Isuru Kottahachchi</b>

                        <img
                            src={proPic}
                            alt=""
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar