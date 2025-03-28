import React from 'react';
import { Layout, Button, Space } from 'antd';
import './Header.css';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  return (
    <AntHeader className="app-header">
      <div className="logo">
        <img src="/logo.svg" alt="Brevis" width="120" />
      </div>
      <div className="nav-links">
        <Space>
          <a href="#">Pico zkVM</a>
          <a href="#">zkCoprocessor</a>
        </Space>
      </div>
      <div className="header-actions">
        <Button type="primary" className="contact-btn">Contact us</Button>
      </div>
    </AntHeader>
  );
};

export default Header;