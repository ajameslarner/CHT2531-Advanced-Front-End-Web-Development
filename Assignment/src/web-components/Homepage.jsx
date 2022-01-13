import React from 'react';
import millify from 'millify';
import { Space, Card, Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCoinsQuery } from '../services/CoinAPI';
import { Coins, Updates} from '../web-components';

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCoinsQuery(10);
    const globalStats = data?.data?.stats;

    if(isFetching) return 'Loading...';

    return (
        <>
            <Title level={2} className="show-more">Global Statistics</Title>
            <div className="home-heading-container">
                <Row span={12}>
                    <Col><Statistic title="Global Coins" value={globalStats.total} /></Col>
                </Row>
                <Row>
                    <Col><Statistic title="Global Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                </Row>
                <Row>
                    <Col><Statistic title="Global Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
                </Row>
                <Row>
                    <Col><Statistic title="Global 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
                </Row>
                <Row>
                    <Col><Statistic title="Global Markets" value={millify(globalStats.totalMarkets)} /></Col>
                </Row>
                
            </div>
            <Space></Space>
            <div className="home-heading-container">
                <Title level={2} className="show-more">Top Coins</Title>
                <Title level={4} className="show-more"><Link to={'/coins'}>View More</Link></Title>
            </div>
             {/*Coins Jsx Component  */}
            <Coins simplified={true} />
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto Updates</Title>
                <Title level={4} className="show-more"><Link to={'/updates'}>View More</Link></Title>
            </div>
            <Updates simplified={true}/>
        </>
    )
}

export default Homepage
