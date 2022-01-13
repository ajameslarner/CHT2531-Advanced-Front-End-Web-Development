import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

//API Service
import { useGetCoinsQuery } from '../services/CoinAPI';

export const Coins = ({simplified}) => {
    //Simplified return
    const count = simplified ? 10 : 100;

    //API Data
    const { data: coinsList, isFetching } = useGetCoinsQuery(count);
    const [coins, setCoins] =  useState(coinsList?.data?.coins);

    //Search Filter Function
    const [FilterTerm, setFilteredTerm] = useState('');
    useEffect(() => {
        const result = coinsList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(FilterTerm.toLowerCase()));
        setCoins(result)
    }, [coinsList, FilterTerm]);

    //Loading API Exception
    if(isFetching) return 'Loading Coins...';

    return (
        <>
            <Row gutter={[24, 24]}>
                {/* Check using simplified parament to hide search function from homepage */}
                {!simplified && (
                    <div className="search-coin">
                        <Input placeholder="Search Coins" onChange={(e) => setFilteredTerm(e.target.value)} />
                    </div>
                )}
                
                <Row className="coin-card-container">
                    {coins?.map((currency) => (
                        <Col xs={6} sm={6} lg={1} className="coin-card" key={currency.uuid}>
                            <Link key={currency.uuid} to={`/coins/${currency.uuid}`}>
                                <Card title={`${currency.rank}. ${currency.name}`} extra={<img className="coin-image" src={currency.iconUrl}/>} hoverable>
                                    <p>Price: {millify(currency.price)}</p>
                                    <p>Market Cap: {millify(currency.marketCap)}</p>
                                    <p>Daily Change: {millify(currency.change)}</p>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Row>
        </>
    )
}

export default Coins