import React from 'react';
import { Row, Col, Card, Popover } from 'antd';
import { statisticsData } from '../mockData';
import './StatisticsCards.css';

const StatisticsCards: React.FC = () => {
  let app_request_content = "This is the number of requests sent by Brevis-powered dApps. Each request may involve multiple ZK proofs (e.g., an app request may involve multiple storage slots, receipts or transactions).";
  let unique_address_content = "This is the number of unique user addresses attested in Brevis-powered dApp requests.";
  return (
    <div className="statistics-section">
      <Row gutter={[20, 12]}>
        <Col xs={24} sm={12} md={8}>
          <Card className="stat-card stat-card1">
            <div className='stat_number'>{statisticsData.totalProofs.value.toLocaleString()}</div>
            <div className='stat_des'>Number of Proofs Generated (all time)</div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className="stat-card stat-card2">
            <div className='stat_number'>{statisticsData.totalTransactions.value.toLocaleString()}</div>
            <div className='stat_des'>
              <span>Number of App Requests (all time)</span>
              <Popover placement="top" content={app_request_content} color="#22252E" rootClassName='stat_popover'>
                <img src="/info.svg" alt="Brevis" width="20" />
              </Popover>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className="stat-card stat-card3">
            <div className='stat_number'>{statisticsData.totalGas.value.toLocaleString()}</div>
            <div className='stat_des'>
              <span>Unique Addresses (all time)</span>
              <Popover placement="top" content={unique_address_content} color="#22252E" rootClassName='stat_popover'>
                <img src="/info.svg" alt="Brevis" width="20" />
              </Popover>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className="stat-card stat-card4">
            <div className='stat_number'>{statisticsData.totalUsers.value.toLocaleString()}</div>
            <div className='stat_des'>Number of Proofs Generated (24h)</div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className="stat-card stat-card5">
            <div className='stat_number'>{statisticsData.totalApps.value.toLocaleString()}</div>
            <div className='stat_des'>Number of App Requests (24h)</div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className="stat-card stat-card6">
            <div className='stat_number'>{statisticsData.totalNodes.value.toLocaleString()}</div>
            <div className='stat_des'>Unique Addresses (24h)</div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default StatisticsCards;