import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navigation, Homepage, Coins, Coin, Market, Updates } from './web-components';
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
          <Layout>
            <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path="/coins" element={<Coins/>} />
              <Route path="/coins/:coinId" element={<Coin/>} />
              <Route path="/market" element={<Market/>} />
              <Route path="/updates" element={<Updates/>} />
            </Routes>
          </Layout>
        </div>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            CryptoTraxx <br />
            All Rights Reserved.
            <br />
            <Space>
              <br />
              <Link to="/">Dashboard</Link> <br />
              <Link to="/coins">Coins</Link> <br />
              <Link to="/market">Market</Link> <br />
              <Link to="/updates">Updates</Link> <br />
            </Space>
          </Typography.Title>
        </div>
      </div>
    </div>
  );
}

export default App;