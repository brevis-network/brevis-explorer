import React from 'react';
import { Layout, Typography, ConfigProvider, theme } from 'antd';
import './App.css';
import Header from './components/Header';
import StatisticsCards from './components/StatisticsCards';
import ChartSection from './components/ChartSection';
import AppList from './components/AppList';

const { Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#6c5ce7',
          colorBgBase: '#14161E',
          colorTextBase: '#FFFCE4',
        },
      }}
    >
      <Layout className="app-layout">
        <Header />
        <Content className="main-content">
          <div className='content-top'>
            <img className='top-img-left' src="/left.svg" alt="left" width="215" />
            <img className='top-img-right' src="/right.svg" alt="right" width="215" />
            <div className="title-section">
              <div className="large-title">Explore the ZK Verifiable Computing Ecosystem Powered by Brevis</div>
              <div className="small-title">Explore the ZK Verifiable </div>
              <div className="small-title">Computing Ecosystem</div>
              <div className="small-title">Powered by Brevis</div>
            </div>
            <StatisticsCards />
          </div>
          <ChartSection />
          <AppList />
        </Content>
        <div className="app-footer">
          © Brevis 2025. All rights reserved.
        </div>
      </Layout>
    </ConfigProvider>
  );
}

export default App;