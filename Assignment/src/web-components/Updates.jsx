import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card} from 'antd';
import moment from 'moment';

//API Service
import { useGetUpdatesQuery } from '../services/UpdatesAPI';
import { useGetCoinsQuery } from '../services/CoinAPI';

const { Text, Title } = Typography;
const { Option } = Select;
const placeholderImage = 'https://converticomedia.com/blog/wp-content/uploads/2019/05/cm_19_Cryptocurrency1080.png';

export const Updates = ({simplified}) => {
    // //Simplified return
     const [UpdatesCategory, setUpdatesCategory] = useState('Cryptocurrency');

    //API Data
    const { data: updateNews, isFetching  } = useGetUpdatesQuery({UpdatesCategory, count: simplified ? 4 : 100});
    const { data } = useGetCoinsQuery(100);

    //Loading API Exception
    if(isFetching) return 'Loading Updates...';

    return (
        <Row gutter={[24, 24]}>
            {/* Check using simplified parament to hide search function from homepage */}
            {!simplified && (
                <Col span={24}>
                    <Select showSearch className="select-news" placeholder="Choose a coin" optionFilterProp="children" onChange={(value) => setUpdatesCategory(value)} filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                        {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
                    </Select>
                </Col>
            )}
            {updateNews.value.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer" >
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.name}</Title>
                                <img style={{ maxWidth: '100px', maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || placeholderImage} alt="" />
                            </div>
                            <p>
                                {news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || placeholderImage} shape="square" size="small" /> 
                                    <Text className="provider-name">{news.provider[0]?.name}</Text>
                                </div>
                                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Updates