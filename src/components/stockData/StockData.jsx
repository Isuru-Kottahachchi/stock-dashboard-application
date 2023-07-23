import React, { useState } from 'react';

const StockData = () => {
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
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <div>
      <h2>Stock Data</h2>
      <input type="date" value={selectedDate} onChange={handleDateChange} />
      <button onClick={fetchData}>Fetch Data</button>
      {highValue && <p>High Value: {highValue}</p>}
      {lowValue && <p>Low Value: {lowValue}</p>}
      {openValue && <p>Open Value: {openValue}</p>}
    </div>
  );
};

export default StockData;
