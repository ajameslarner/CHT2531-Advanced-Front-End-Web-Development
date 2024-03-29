import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const ChangeOverTime = ({ coinHistory, currentPrice, coinName }) => {
  const CurrentCoinPrice = [];
  const CurrentCoinTime = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    CurrentCoinPrice.push(coinHistory?.data?.history[i].price);
    CurrentCoinTime.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }

  const data = {
    labels: CurrentCoinTime,
    datasets: [
      {
        label: 'Price In USD',
        data: CurrentCoinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      y: { 
        ticks: {
          beginAtZero: true,
        }
      }
    }
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default ChangeOverTime;