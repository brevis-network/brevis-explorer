import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Select, DatePicker, Button } from 'antd';
import { DatePicker as MobileDatePicker } from "antd-mobile";
import { chartsData } from '../mockData';
import './ChartSection.css';
import dayjs, { Dayjs } from 'dayjs';
import { getWidth } from '../util';
import Bar from './Bar';
import { CalendarOutlined, DownOutlined, SwapRightOutlined } from '@ant-design/icons';
import { GetAppInfosRequest } from '../proto/statistics_pb';
import { getAppInfos } from '../store/grpc_client';
import AppPicker from './common/appPicker';

const { RangePicker } = DatePicker;

interface PresetItem {
  label: string;
  value: [Dayjs, Dayjs];
  key: string;
}

const ChartSection: React.FC = () => {
  const now = new Date();

  const [proofSelectedApp, setProofSelectedApp] = useState<string>('All Apps');
  const [appSelectedApp, setAppSelectedApp] = useState<string>('All Apps');
  const [addressSelectedApp, setAddressSelectedApp] = useState<string>('All Apps');

  const [dateRange, setDateRange] = useState<[Dayjs, Dayjs] | null>(null);
  const [activePreset, setActivePreset] = useState<string | null>(null);

  // for mobile date picker
  const [startVisible, setStartVisible] = useState<boolean>(false);
  const [endVisible, setEndVisible] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date>(now);
  const [endDate, setEndDate] = useState<Date>(now);

  const [proofAppVisible, setProofAppVisible] = useState<boolean>(false);
  const [proofSelectedAppValue, setProofSelectedAppValue] = useState<(string | null)[]>(['all']);
  const [proofSelectedAppLable, setProofSelectedAppLabel] = useState<string>('All Apps');

  const [appsAppVisible, setAppsAppVisible] = useState<boolean>(false);
  const [appSelectedAppValue, setAppSelectedAppValue] = useState<(string | null)[]>(['all']);
  const [appSelectedAppLable, setAppSelectedAppLable] = useState<string>('All Apps');

  const [addressAppVisible, setAddressAppVisible] = useState<boolean>(false);
  const [addressSelectedAppValue, setAddressSelectedAppValue] = useState<(string | null)[]>(['all']);
  const [addressSelectedAppLable, setAddressSelectedAppLable] = useState<string>('All Apps');

  const [windowWidth, setWindowWidth] = useState<number>(getWidth());

  const [appOptions, setAppOptions] = useState<{ label: React.ReactNode; value: string }[]>([]);
  const [appColumns, setAppColumns] = useState<{ label: React.ReactNode; value: string }[][]>([]);


  useEffect(() => {
    const req = new GetAppInfosRequest();
    getAppInfos(req).then((res) => {
      if(res) {
        const { appsList } = res.toObject();
        const options = appsList.map(app => ({
          label: <div style={{ display: 'flex', alignItems: 'center' }}>
             <img
              src={app.iconUrl}
              alt=""
              style={{ width: 24, height: 24, marginRight: 12 }}
            />
            <span>{app.name.toLocaleUpperCase()}</span>
          </div>,
          value: app.name, 
        }));
        setAppOptions(options);
        let appColumns = [{ label: 'All Apps', value: 'all' }, ...options];
        setAppColumns([appColumns]);
      }
    })
  }, []);

  const handleStartConfirm = (value: Date) => {
    setStartDate(value);
    setStartVisible(false);
    setTimeout(() => setEndVisible(true), 300);
  };

  const handleMProofAppConfirm = (value: any, label: any) => {
    setProofSelectedAppLabel(label);
    setProofSelectedAppValue(value);
    setProofAppVisible(false);
  };

  const handleMAppsAppConfirm = (value: any, label: any) => {
    setAppSelectedAppLable(label);
    setAppSelectedAppValue(value);
    setAppsAppVisible(false);
  };

  const handleMAddressAppConfirm = (value: any, lable: any) => {
    setAddressSelectedAppLable(lable);
    setAddressSelectedAppValue(value);
    setAddressAppVisible(false);
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

  const handleProofAppChange = (value: string) => {
    setProofSelectedApp(value);
  };
  const handleAppsAppChange = (value: string) => {
    setAppSelectedApp(value);
  };
  const handleAddressAppChange = (value: string) => {
    setAddressSelectedApp(value);
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
                  value={proofSelectedApp}
                  labelInValue
                  defaultValue="All Apps" 
                  onChange={handleProofAppChange}
                  dropdownStyle={{ backgroundColor: '#22252E', color: '#FFFCE4'}}
                  popupClassName='app-select'
                  options={[
                    { label: 'All Apps', value: 'all' },
                    ...appOptions
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
                <div className="mobile-date-picker-container">
                  <div className="mobile-picker-btn" style={{ marginBottom: "20px" }}>
                    <div className="mobile-picker-btn-left" onClick={() => {setProofAppVisible(true)}}>
                      <div className="start">{proofSelectedAppLable}</div>
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
                  <AppPicker
                    visible={proofAppVisible}
                    options={appColumns}
                    onConfirm={handleMProofAppConfirm}
                    onClose={() => {
                      setProofAppVisible(false)
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
                  value={appSelectedApp}
                  labelInValue={false}
                  defaultValue="All Apps" 
                  onChange={handleAppsAppChange}
                  dropdownStyle={{ backgroundColor: '#22252E', color: '#FFFCE4'}}
                  popupClassName='app-select'
                  options={[
                    { label: 'All Apps', value: 'all' },
                    ...appOptions
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
                <div className="mobile-date-picker-container">
                  <div className="mobile-picker-btn" style={{ marginBottom: "20px" }}>
                    <div className="mobile-picker-btn-left" onClick={() => {setAppsAppVisible(true)}}>
                      <div className="start">{appSelectedAppLable}</div>
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
                  <AppPicker
                    visible={appsAppVisible}
                    options={appColumns}
                    onConfirm={handleMAppsAppConfirm}
                    onClose={() => {
                      setAppsAppVisible(false)
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
                <div>Number of Unique Addresses: <span className="chart-count">{chartsData.proofsGenerated.count.toLocaleString()}</span></div>
              </div>
              <div className="app-space">
                <Select 
                  value={addressSelectedApp}
                  labelInValue={false}
                  defaultValue="All Apps" 
                  onChange={handleAddressAppChange}
                  dropdownStyle={{ backgroundColor: '#22252E', color: '#FFFCE4'}}
                  popupClassName='app-select'
                  options={[
                    { label: 'All Apps', value: 'all' },
                    ...appOptions
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
                <div className="mobile-date-picker-container">
                  <div className="mobile-picker-btn" style={{ marginBottom: "20px" }}>
                    <div className="mobile-picker-btn-left" onClick={() => {setAddressAppVisible(true)}}>
                      <div className="start">{addressSelectedAppLable}</div>
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
                  {/* <Picker
                    value={addressSelectedAppValue}
                    columns={appColumns}
                    visible={appVisible}
                    onClose={() => {
                      setAppVisible(false)
                    }}
                    confirmText="OK"
                    cancelText=""
                    onConfirm={handleMAddressAppChange}
                  /> */}
                  <AppPicker
                    visible={addressAppVisible}
                    options={appColumns}
                    onConfirm={handleMAddressAppConfirm}
                    onClose={() => {
                      setAddressAppVisible(false)
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
      </Row>
    </div>
  );
};

export default ChartSection;