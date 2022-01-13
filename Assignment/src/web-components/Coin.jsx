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
    const { CoinUnique } = useParams();
    const [ timePeriod, setTimePeriod ] = useState('7d');
    const { data, isFetching } = useGetCoinDetailsQuery(CoinUnique);
    const { data: coinHistory } = useGetCoinHistoryQuery({CoinUnique, timePeriod });
    const CoinDescription = data?.data?.coin;

    //Loading API Exception
    if(isFetching) return 'Loading Coins...';

    const time = ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'];

    const stats = [
        { title: 'Price to USD', value: `$ ${CoinDescription?.price && millify(CoinDescription?.price)}`, icon: <DollarCircleOutlined /> },
        { title: 'Rank', value: CoinDescription?.rank, icon: <NumberOutlined /> },
        { title: 'Daily Change', value: `$ ${CoinDescription?.change}`, icon: <ThunderboltOutlined /> },
        { title: 'Market Cap', value: `$ ${CoinDescription?.marketCap && millify(CoinDescription?.marketCap)}`, icon: <DollarCircleOutlined /> },
        { title: 'Daily ATH (Avg)', value: `$ ${CoinDescription?.allTimeHigh?.price && millify(CoinDescription?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
    ];

    const genericStats = [
        { title: 'Markets', value: CoinDescription?.numberOfMarkets, icon: <FundOutlined /> },
        { title: 'Exchanges', value: CoinDescription?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
        { title: 'Approved Supply', value: CoinDescription?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
        { title: 'Total Coin Count', value: `$ ${CoinDescription?.supply?.total && millify(CoinDescription?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
        { title: 'Circulation', value: `$ ${CoinDescription?.supply?.circulating && millify(CoinDescription?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
    ];

    return (
        <Col className="coin-detail-container">
            <Col className="coin-heading-container">
                <Title level={2} className="coin-name">
                    {CoinDescription.name} ({CoinDescription.symbol})
                </Title>
                <p>
                    {CoinDescription.name} US Dollar Value, Statistics
                </p>
            </Col>
            <Select className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => setTimePeriod(value)}>
                {time.map((date) => <Option key={date}>{date}</Option>)}
            </Select>
            <ChangeOverTime coinHistory={coinHistory} currentPrice={millify(CoinDescription?.price)} coinName={CoinDescription?.name} />
            <Col className="stats-container">
                <Col className="coin-value-statistics">
                    <Col className="coin-value-statistics-heading">
                        <Title level={3} className="coin-details-heading">
                            {CoinDescription.name} Value Statistics
                        </Title>
                        <p>
                            Live overview of {CoinDescription.name} price changes
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
                        What is {CoinDescription.name}
                        {HTMLReactParser(CoinDescription.description)}
                    </Title>
                </Row>
                <Col className="coin-links">
                    <Title level={3} className="coin-details-heading">
                        {CoinDescription.name} Links
                    </Title>
                    {CoinDescription.links.map((link) => 
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