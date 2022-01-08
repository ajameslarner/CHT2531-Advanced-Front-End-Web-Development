import React from 'react';
//Styling
import { Button, Menu, Typography, Avatar} from 'antd';
//Links
import { Link } from 'react-router-dom';
//Icons
import { HomeOutlined, MoneyOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
//Logo
import icon from '../assets/images/logo.png';

const Navigation = () => {
    return (
        <div className="Nav-Container">
            <div className="Logo">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="Logo">
                    <Link to="/">CryptoTrax</Link>
                </Typography.Title>
                {/* <Button className="Menu-Control">
                    
                </Button> */}
            </div>
            
        </div>
    )
}

export default Navigation
