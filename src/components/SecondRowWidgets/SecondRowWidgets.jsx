import React from 'react'
import "./secondRowWidgets.scss"

function SecondRowWidgets({ type, value, date }) {

    console.log("Levl two" + value);

    let data;

    switch (type) {
        case "High":
            data = {

                title: "High",
                amount: value,
                date: date,

            };
            break;
        case "Low":
            data = {

                title: "Low",
                amount: value,
                date: date,

            };
            break;
        case "Open":
            data = {

                title: "Open",
                amount: value,
                date: date,

            };
            break;
        default:
            break;
    }

    return (

        <div className='widgetSecondRaw'>

            <div className="left">
                <span className='title'>{data.title}</span>
                <span className='counter'>${data.amount}</span>
                <span className='link'>{data.date}</span>
            </div>
            <div className="right">
                <div className='percentage'></div>

            </div>

        </div>




    )
}

export default SecondRowWidgets 