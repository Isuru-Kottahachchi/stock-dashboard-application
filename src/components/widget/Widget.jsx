import React from 'react'
import "./widget.scss"
import DashboardImage from './dashboard.png';

const Widget = () => {


  return (
    <div className='widget'>
      <div className="left">
        <br></br>
        <span className='title'><b>Welcome to the Dashboard!</b></span>
        <br></br>
        <span className='description'>Check out the latest market data from all US stock exchanges.</span>

      </div>
      
      <div className="right">
        <span className='percentage'>
          <img src={DashboardImage} alt="Dashboard" />
        </span>
      </div>
    </div>
  )
}

export default Widget