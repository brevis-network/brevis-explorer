import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Select, DatePicker, Button } from 'antd';
import { DatePicker as MobileDatePicker, Picker } from "antd-mobile";
import { chartsData, appColumns } from '../mockData';
import './ChartSection.css';
import dayjs, { Dayjs } from 'dayjs';
import { getWidth } from '../util';
import Bar from './Bar';
import { CalendarOutlined, DownOutlined, SwapRightOutlined } from '@ant-design/icons';
import { PickerValue, PickerValueExtend } from 'antd-mobile/es/components/picker-view';

const { RangePicker } = DatePicker;
const { Option } = Select;

interface PresetItem {
  label: string;
  value: [Dayjs, Dayjs];
  key: string;
}

const ChartSection: React.FC = () => {
  const now = new Date();

  const [selectedApp, setSelectedApp] = useState<string>('All Apps');
  const [dateRange, setDateRange] = useState<[Dayjs, Dayjs] | null>(null);
  const [activePreset, setActivePreset] = useState<string | null>(null);

  // for mobile date picker
  const [startVisible, setStartVisible] = useState<boolean>(false);
  const [endVisible, setEndVisible] = useState<boolean>(false);
  const [appVisible, setAppVisible] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date>(now);
  const [endDate, setEndDate] = useState<Date>(now);
  
  const [appValue, setAppValue] = useState<(string | null)[]>(['all']);
  const [appLabel, setAppLabel] = useState<string>("All Apps");

  const [windowWidth, setWindowWidth] = useState<number>(getWidth());

  const handleStartConfirm = (value: Date) => {
    setStartDate(value);
    setStartVisible(false);
    setTimeout(() => setEndVisible(true), 300);
  };

  const handleAppSelect = (value: any, extend: any) => {
    setAppLabel(extend.items[0].label);
    setAppValue(value);
    setAppVisible(false);
  };

  const handleEndConfirm = (value: Date) => {
    setEndDate(value);
    setEndVisible(false);
  };


  useEffect(() => {
    const widthSize = () => {
      setWindowWidth(getWidth());
    };
    window.addEventListener("resize", widthSize);
    return () => {
      window.removeEventListener("resize", widthSize);
    };
  }, []);

  const handleAppChange = (value: string) => {
    setSelectedApp(value);
    console.log('Selected App:', value);
  };

  const handleDateChange = (dates: any) => {
    setDateRange(dates);
    setActivePreset(null); 
  }
  

  const handlePresetClick = (preset: string, value: [Dayjs, Dayjs]) => {
    console.log('preset App:', value);
    setActivePreset(preset);
  };

  const presets: PresetItem[] = [
    {
      label: 'Last 7 days',
      value: [dayjs().subtract(7, 'day'), dayjs()],
      key: 'last7days'
    },
    {
      label: 'Last 30 days',
      value: [dayjs().subtract(30, 'day'), dayjs()],
      key: 'last30days'
    },
    {
      label: 'Today',
      value: [dayjs().startOf('day'), dayjs()],
      key: 'today'
    },
    {
      label: 'This Month',
      value: [dayjs().startOf('month'), dayjs()],
      key: 'thisMonth'
    },
  ];

  const renderPresetButtons = () => {
    return (
      <div className="date-presets">
        {presets.map((preset) => (
          <Button
            key={preset.key}
            className={`preset-btn ${activePreset === preset.key ? 'active' : ''}`}
            onClick={() => {
              setDateRange(preset.value);
              handlePresetClick(preset.key, preset.value);
            }}
          >
            {preset.label}
          </Button>
        ))}
      </div>
    );
  };

  return (
    <div className="chart-section">
      <Row gutter={[0, 20]}>
      <Col span={24}>
          <Card className="chart-card">
            <div className="chart-title">
              <div className="chart-title-des">
                <div>Number of Proofs Generated: <span className="chart-count">{chartsData.proofsGenerated.count.toLocaleString()}</span></div>
              </div>
              <div className="app-space">
                <Select 
                  value={selectedApp}
                  labelInValue
                  defaultValue="All Apps" 
                  onChange={handleAppChange}
                  dropdownStyle={{ backgroundColor: '#22252E', color: '#FFFCE4'}}
                  popupClassName='app-select'
                  options={[
                    { label: 'All Apps', value: 'all' },
                    { label: 'UNISWAP', value: 'uniswap' },
                    { label: 'PANCAKE', value: 'pancake' },
                  ]}
                />
                <div className="date-picker-container">
                  <RangePicker 
                    // open={true}
                    value={dateRange}
                    onChange={handleDateChange}
                    format="MMM DD, YYYY HH"
                    showTime={{ format: 'HH'}}
                    popupClassName='brevis-range-picker'
                    renderExtraFooter={() => renderPresetButtons()}
                  />
                </div>
                <div className="mobile-date-picker-container">
                  <div className="mobile-picker-btn" style={{ marginBottom: "20px" }}>
                    <div className="mobile-picker-btn-left" onClick={() => {setAppVisible(true)}}>
                      <div className="start">{appLabel}</div>
                    </div>
                    <div className="mobile-picker-btn-right">
                      <DownOutlined />
                    </div>
                  </div>

                  <div className="mobile-picker-btn">
                    <div className="mobile-picker-btn-left">
                      <div className="start" onClick={() => {setStartVisible(true)}}>{startDate ? dayjs(startDate).format("MMM DD, YYYY HH") : "Start date"}</div>
                      <SwapRightOutlined />
                      <div className="end" onClick={() => {setEndVisible(true)}}>{endDate ? dayjs(endDate).format("MMM DD, YYYY HH") : "End date"}</div>
                    </div>
                    <div className="mobile-picker-btn-right">
                      <CalendarOutlined />
                    </div>
                  </div>
                  <MobileDatePicker
                    title=''
                    visible={startVisible}
                    onClose={() => {
                      setStartVisible(false)
                    }}
                    max={now}
                    defaultValue={now}
                    confirmText="OK"
                    cancelText=""
                    onConfirm={handleStartConfirm}
                    precision="hour"
                  />
                  <MobileDatePicker
                    title=''
                    visible={endVisible}
                    onClose={() => {
                      setEndVisible(false)
                    }}
                    max={now}
                    defaultValue={now}
                    confirmText="OK"
                    cancelText=""
                    onConfirm={handleEndConfirm}
                    precision="hour"
                  />
                  <Picker
                    value={appValue}
                    columns={appColumns}
                    visible={appVisible}
                    onClose={() => {
                      setAppVisible(false)
                    }}
                    confirmText="OK"
                    cancelText=""
                    onConfirm={handleAppSelect}
                    onSelect={(value, extend) => {
                      console.log('Selected app value:', value);
                      console.log('Selected app extend:', extend);
                    }}
                  />
                </div>
              </div>
            </div>
            <Bar
              id={"1"}
              seriesName="Number"
              series={chartsData.proofsGenerated.data}
              xAxis={chartsData.proofsGenerated.xAxis}
            />
          </Card>
        </Col>
        <Col span={24}>
          <Card className="chart-card">
            <div className="chart-title">
              <div className="chart-title-des">
                <div>Number of App Requests: <span className="chart-count">{chartsData.proofsGenerated.count.toLocaleString()}</span></div>
              </div>
              <div className="app-space">
                <Select 
                  value={selectedApp}
                  labelInValue={false}
                  defaultValue="All Apps" 
                  onChange={handleAppChange}
                  dropdownStyle={{ backgroundColor: '#22252E', color: '#FFFCE4'}}
                  popupClassName='app-select'
                  options={[
                    { label: 'All Apps', value: 'all' },
                    { label: 'UNISWAP', value: 'uniswap' },
                    { label: 'PANCAKE', value: 'pancake' },
                  ]}
                />
                <div className="date-picker-container">
                  <RangePicker 
                    value={dateRange}
                    onChange={handleDateChange}
                    format="MMM DD, YYYY HH"
                    showTime={{ format: 'HH'}}
                    popupClassName='brevis-range-picker'
                    renderExtraFooter={() => renderPresetButtons()}
                  />
                </div>
              </div>
            </div>
            <Bar
              id={"1"}
              seriesName="Number"
              series={chartsData.proofsGenerated.data}
              xAxis={chartsData.proofsGenerated.xAxis}
            />
          </Card>
        </Col>
        <Col span={24}>
          <Card className="chart-card">
            <div className="chart-title">
              <div className="chart-title-des">
                <div>Number of Unique Addresses: <span className="chart-count">{chartsData.proofsGenerated.count.toLocaleString()}</span></div>
              </div>
              <div className="app-space">
                <Select 
                  value={selectedApp}
                  labelInValue={false}
                  defaultValue="All Apps" 
                  onChange={handleAppChange}
                  dropdownStyle={{ backgroundColor: '#22252E', color: '#FFFCE4'}}
                  popupClassName='app-select'
                  options={[
                    { label: 'All Apps', value: 'all' },
                    { label: 'UNISWAP', value: 'uniswap' },
                    { label: 'PANCAKE', value: 'pancake' },
                  ]}
                />
                <div className="date-picker-container">
                  <RangePicker 
                    value={dateRange}
                    onChange={handleDateChange}
                    format="MMM DD, YYYY HH"
                    showTime={{ format: 'HH'}}
                    popupClassName='brevis-range-picker'
                    renderExtraFooter={() => renderPresetButtons()}
                  />
                </div>
              </div>
            </div>
            <Bar
              id={"1"}
              seriesName="Number"
              series={chartsData.proofsGenerated.data}
              xAxis={chartsData.proofsGenerated.xAxis}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ChartSection;