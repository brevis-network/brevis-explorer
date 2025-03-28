import React, { useState } from 'react';
import { Typography, Avatar, Pagination } from 'antd';
import { appsData } from '../mockData';
import './AppList.css';

const { Title } = Typography;

const AppList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 6;
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  const currentData = appsData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="app-list-section">
      <Title level={4} className="section-title">Brevis Powered Apps</Title>
        {currentData.map(app => (
          <div className="app-card" key={app.id}>
            <div className="app-card_header">
              <Avatar className="app-avatar" style={{ backgroundColor: '#F9A6E1' }}>{app.name.toUpperCase()}</Avatar>
              <div className="app-details">
                <div className="app-name">
                  {app.name.toUpperCase()}
                  <img className='export-icon' src="/export.svg" alt="export" width="12" />
                </div>
                <div className="app-description">{app.description}</div>
              </div>
            </div>
            <div className="app-card_header_small">
              <div className="app-title">
                <Avatar className="app-avatar" style={{ backgroundColor: '#F9A6E1' }}>{app.name.toUpperCase()}</Avatar>
                <div className="app-name">
                  {app.name.toUpperCase()}
                  <img className='export-icon' src="/export.svg" alt="export" width="12" />
                </div>
              </div>
              <div className="app-details">
                <div className="app-description">{app.description}</div>
              </div>
            </div>
            <div className="app-card-stats">
              <div className="stats-group">
                <div className="stat-label">Number of Proofs (all time)</div>
                <div className="stat-value">{app.txCount}</div>
              </div>
              <div className="stats-group">
                <div className="stat-label">Number of App Requests (all time)</div>
                <div className="stat-value">{app.txCount}</div>
              </div>
              <div className="stats-group">
                <div className="stat-label">Unique Addresses (all time)</div>
                <div className="stat-value">{app.txCount}</div>
              </div>
              <div className="stats-group">
                <div className="stat-label">Number of Proofs (24h)</div>
                <div className="stat-value">{app.txCount}</div>
              </div>
              <div className="stats-group">
                <div className="stat-label">Number of Requests (24h)</div>
                <div className="stat-value">{app.txCount}</div>
              </div>
              <div className="stats-group">
                <div className="stat-label">Unique Addresses (24h)</div>
                <div className="stat-value">{app.txCount}</div>
              </div>
            </div>
          </div>
        ))}      
      <div className="pagination-container">
        <Pagination 
          current={currentPage} 
          onChange={handlePageChange} 
          total={appsData.length} 
          pageSize={pageSize} 
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default AppList;