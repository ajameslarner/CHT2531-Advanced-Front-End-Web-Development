import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Typography, Space } from 'antd';

import { Navigation, Homepage, Coins, Coin, Updates } from './web-components';
import './App.css';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navigation />
      </div>
      <div className="main">
        <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path="/coins" element={<Coins/>} />
              <Route path="/coins/:CoinUnique" element={<Coin/>} />
              <Route path="/updates" element={<Updates/>} />
            </Routes>
        </div>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            CoinWatch <br />
            All Rights Reserved.
            <br />
            <Space>
              <br />
              <Link to="/">Dashboard</Link> <br />
              <Link to="/coins">Coins</Link> <br />
              <Link to="/updates">Updates</Link> <br />
            </Space>
          </Typography.Title>
        </div>
      </div>
    </div>
  );
}

export default App;