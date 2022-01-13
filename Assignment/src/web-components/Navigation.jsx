import React, {useState, useEffect } from 'react';
//Styling
import { Button, Menu, Typography, Avatar} from 'antd';
//Links
import { Link } from 'react-router-dom';
//Icons
import { HomeOutlined, DatabaseOutlined, MoneyCollectOutlined, AlertOutlined, MenuOutlined } from '@ant-design/icons';
//Logo
import icon from '../assets/images/logo192.png';

const Navigation = () => {
    const [MobileMenuSwitch, setMobileMenuSwitch] = useState(true);
    const [CurrentScreenSize, setCurrentScreenSize] = useState(null);

    useEffect(() => {
        const reSize = () => setCurrentScreenSize(window.innerWidth);

        window.addEventListener('resize', reSize);

        reSize();

        return () => window.removeEventListener('resize', reSize);
    }, []);

    useEffect(() => {
        if(CurrentScreenSize < 750) {
            setMobileMenuSwitch(false);
        } else {
            setMobileMenuSwitch(true);
        }
    }, [CurrentScreenSize])

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Typography.Title level={1} className="logo">
                    <Link to="/">CoinWatch</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={() => setMobileMenuSwitch(!MobileMenuSwitch)}>
                    <MenuOutlined />
                </Button>
            </div>
            {MobileMenuSwitch && (
                <Menu theme="dark" mode="inline">
                    {/* Home Button */}
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to="/">Dashboard</Link>
                    </Menu.Item>
                    {/* Coins Button */}
                    <Menu.Item icon={<DatabaseOutlined />}>
                        <Link to="/coins">Coins</Link>
                    </Menu.Item>
                    {/* Updates Button */}
                    <Menu.Item icon={<AlertOutlined />}>
                        <Link to="/updates">Updates</Link>
                    </Menu.Item>
                </Menu>
            )}
        </div>
    )
}

export default Navigation
