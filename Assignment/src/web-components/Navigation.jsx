import React, {useState, useEffect } from 'react';
//Styling
import { Button, Menu, Typography, Avatar} from 'antd';
//Links
import { Link } from 'react-router-dom';
//Icons
import { HomeOutlined, DatabaseOutlined, ShopOutlined, AlertOutlined, MenuOutlined } from '@ant-design/icons';
//Logo
import icon from '../assets/images/logo.png';

const Navigation = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const reSize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', reSize);

        reSize();

        return () => window.removeEventListener('resize', reSize);
    }, []);

    useEffect(() => {
        if(screenSize < 750) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize])

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} shape="square" size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">CryptoTrax</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </Button>
            </div>
            {activeMenu && (
                <Menu theme="dark">
                {/* Home Button */}
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Dashboard</Link>
                </Menu.Item>
                {/* Coins Button */}
                <Menu.Item icon={<DatabaseOutlined />}>
                    <Link to="/coins">Coins</Link>
                </Menu.Item>
                {/* Market Button */}
                <Menu.Item icon={<ShopOutlined />}>
                    <Link to="/market">Market</Link>
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
