import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCoinsQuery } from '../services/CoinAPI';
import { Coins, Updates} from '../web-components';

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCoinsQuery(5);
    const globalStats = data?.data?.stats;
    
    console.log(data);

    if(isFetching) return 'Loading...';

    return (
        <>
            <Title level={2} className="heading">Global Statistics</Title>
            <Row>
                <Col span={12}><Statistic title="Total Coins" value={globalStats.total} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptocurrencies</Title>
                <Title level={3} className="show-more"><Link to={'/coins'}>Show More</Link></Title>
            </div>
            <Coins simplified={true} />
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto Updates</Title>
                <Title level={3} className="show-more"><Link to={'/updates'}>Show More</Link></Title>
            </div>
            <Updates simplified={true}/>
        </>
    )
}

export default Homepage
