import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

import { useGetCoinDetailsQuery, useGetCoinHistoryQuery} from '../services/CoinAPI';
import ChangeOverTime from './ChangeOverTime';

const { Title, Text } = Typography;
const { Option } = Select;

export const Coin = () => {
    const { coinId } = useParams();
    const [ timePeriod, setTimePeriod ] = useState('7d');
    const { data, isFetching } = useGetCoinDetailsQuery(coinId);
    const { data: coinHistory } = useGetCoinHistoryQuery({coinId, timePeriod });
    const coinInfo = data?.data?.coin;

    //Loading API Exception
    if(isFetching) return 'Loading Coins...';

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
        { title: 'Price to USD', value: `$ ${coinInfo?.price && millify(coinInfo?.price)}`, icon: <DollarCircleOutlined /> },
        { title: 'Rank', value: coinInfo?.rank, icon: <NumberOutlined /> },
        { title: '24h Volume', value: `$ ${coinInfo?.volume && millify(coinInfo?.volume)}`, icon: <ThunderboltOutlined /> },
        { title: 'Market Cap', value: `$ ${coinInfo?.marketCap && millify(coinInfo?.marketCap)}`, icon: <DollarCircleOutlined /> },
        { title: 'Daily ATH (Avg)', value: `$ ${coinInfo?.allTimeHigh?.price && millify(coinInfo?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
    ];

    const genericStats = [
        { title: 'Number Of Markets', value: coinInfo?.numberOfMarkets, icon: <FundOutlined /> },
        { title: 'Number Of Exchanges', value: coinInfo?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
        { title: 'Approved Supply', value: coinInfo?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
        { title: 'Total Supply', value: `$ ${coinInfo?.supply?.total && millify(coinInfo?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
        { title: 'Circulating Supply', value: `$ ${coinInfo?.supply?.circulating && millify(coinInfo?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
    ];

    return (
        <Col className="coin-detail-container">
            <Col className="coin-heading-container">
                <Title level={2} className="coin-name">
                    {coinInfo.name} ({coinInfo.symbol})
                </Title>
                <p>
                    {coinInfo.name} US Dollar Value, Statistics
                </p>
            </Col>
            <Select className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => setTimePeriod(value)}>
                {time.map((date) => <Option key={date}>{date}</Option>)}
            </Select>
            <ChangeOverTime coinHistory={coinHistory} currentPrice={millify(coinInfo?.price)} coinName={coinInfo?.name} />
            <Col className="stats-container">
                <Col className="coin-value-statistics">
                    <Col className="coin-value-statistics-heading">
                        <Title level={3} className="coin-details-heading">
                            {coinInfo.name} Value Statistics
                        </Title>
                        <p>
                            Live overview of {coinInfo.name} price changes
                        </p>
                    </Col>
                    {stats.map(({ icon, title, value}) =>
                        <Col className="coin-stats">
                            <Col className="coin-stats-name">
                                <Text>{icon}</Text>
                                <Text>{title}</Text>
                            </Col>
                            <Text className="stats">{value}</Text>
                        </Col>
                    )}
                </Col>
                <Col className="other-stats-info">
                    <Col className="coin-value-statistics-heading">
                        <Title level={3} className="coin-details-heading">
                            Other Statistics
                        </Title>
                        <p>
                            Live overview of all coins
                        </p>
                    </Col>
                    {genericStats.map(({ icon, title, value}) =>
                        <Col className="coin-stats">
                            <Col className="coin-stats-name">
                                <Text>{icon}</Text>
                                <Text>{title}</Text>
                            </Col>
                            <Text className="stats">{value}</Text>
                        </Col>
                    )}
                </Col>
            </Col>
            <Col className="coin-desc-link">
                <Row className="coin-desc">
                    <Title level={3} className="coin-details-heading">
                        What is {coinInfo.name}
                        {HTMLReactParser(coinInfo.description)}
                    </Title>
                </Row>
                <Col className="coin-links">
                    <Title level={3} className="coin-details-heading">
                        {coinInfo.name} Links
                    </Title>
                    {coinInfo.links.map((link) => 
                        <Row className="coin-link" key={link.name}>
                            <Title level={5} className="link-name">
                                {link.type}
                            </Title>
                            <a href={link.url} target="_blank" rel="noreferrer">
                                {link.name}
                            </a>
                        </Row>
                    )}
                </Col>
            </Col>
        </Col>
    )
}

export default Coin