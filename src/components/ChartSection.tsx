import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Select, DatePicker, Button } from 'antd';
import MobileDatePicker from "./common/mobileDatePicker";
import { chartsData } from '../mockData';
import './ChartSection.css';
import dayjs, { Dayjs } from 'dayjs';
import { getWidth } from '../util';
import Bar from './Bar';
import { CalendarOutlined, DownOutlined, SwapRightOutlined } from '@ant-design/icons';
import { GetAppDataRequest, GetAppInfosRequest } from '../proto/statistics_pb';
import { getAppInfos, getProofsNum } from '../store/grpc_client';
import AppPicker from './common/appPicker';

const { RangePicker } = DatePicker;

interface PresetItem {
  label: string;
  value: [Dayjs, Dayjs];
  key: string;
}

const ChartSection: React.FC = () => {
  const now = new Date();

  const [proofNum, setProofNum] = useState<number>(0);
  const [proofChartDate, setProofChartDate] = useState<string[]>([]);
  const [proofChartValue, setProofChartValue] = useState<number[]>([]);
  const [proofDateRange, setProofDateRange] = useState<[Dayjs, Dayjs] | null>(null);

  const [appsNum, setAppsNum] = useState<number>(0);
  const [appsChartDate, setAppsChartDate] = useState<string[]>([]);
  const [appsChartValue, setAppsChartValue] = useState<number[]>([]);
  const [appsDateRange, setAppsDateRange] = useState<[Dayjs, Dayjs] | null>(null);

  const [addressNum, setAddressNum] = useState<number>(0);
  const [addressChartDate, setAddressChartDate] = useState<string[]>([]);
  const [addressChartValue, setAddressChartValue] = useState<number[]>([]);
  const [addressDateRange, setAddressDateRange] = useState<[Dayjs, Dayjs] | null>(null);

  const [proofSelectedApp, setProofSelectedApp] = useState<string>('all');
  const [appSelectedApp, setAppSelectedApp] = useState<string>('all');
  const [addressSelectedApp, setAddressSelectedApp] = useState<string>('all');

  // const [dateRange, setDateRange] = useState<[Dayjs, Dayjs] | null>(null);
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

  useEffect(() => {
    if (!proofSelectedApp || !proofDateRange) {
      return;
    }
    let req = new GetAppDataRequest();
    console.log("proofSelectedApp:", proofSelectedApp);
    console.log("proofDateRange:", proofDateRange[0].valueOf(), proofDateRange[1].valueOf());
    req.addAppNames(proofSelectedApp);
    // const start = Math.floor(proofDateRange[0].valueOf() / 1000);
    // const end = Math.floor(proofDateRange[1].valueOf() / 1000);
    // req.setStartTime(start);
    // req.setEndTime(end);
    getProofsNum(req).then((res) => {
      if(res) {
        const { dailyStatisticList } = res.toObject();
        console.log("kkkk:", dailyStatisticList);
        let proofNum = 0;
        let proofChartDate: string[] = [];
        let proofChartValue: number[] = [];
        dailyStatisticList.forEach((item) => {
          proofNum += item.num;
          proofChartValue.push(item.num);
          proofChartDate.push(dayjs(item.date).format("MMM DD"));
        })
        setProofNum(proofNum);
        setProofChartDate(proofChartDate);
        setProofChartValue(proofChartValue);
      }
    })
  }, [proofSelectedApp, proofDateRange]);

  const handleStartConfirm = (value: Date) => {
    setStartDate(value);
    setStartVisible(false);
    
    // Update dateRange with new start date
    if (proofDateRange) {
      setProofDateRange([dayjs(value), proofDateRange[1]]);
    } else {
      setProofDateRange([dayjs(value), dayjs()]);
    }
    
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

  const handleMAddressAppConfirm = (value: any, label: any) => {
    setAddressSelectedAppLable(label);
    setAddressSelectedAppValue(value);
    setAddressAppVisible(false);
  };

  const handleEndConfirm = (value: Date) => {
    setEndDate(value);
    setEndVisible(false);
    
    // Update dateRange with new end date
    if (proofDateRange) {
      setProofDateRange([proofDateRange[0], dayjs(value)]);
    } else {
      setProofDateRange([dayjs(startDate), dayjs(value)]);
    }
    
    // Reset active preset since we've manually selected dates
    setActivePreset(null);
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

  const handleProofAppChange = (v: any) => {
    console.log("handleProofAppChange value:", v);
    setProofSelectedApp(v.value);
  };
  const handleAppsAppChange = (value: string) => {
    setAppSelectedApp(value);
  };
  const handleAddressAppChange = (value: string) => {
    setAddressSelectedApp(value);
  };

  const handleProofDateChange = (dates: any) => {
    setProofDateRange(dates);
    setActivePreset(null);
  }

  const handleAppsDateChange = (dates: any) => {
    setAppsDateRange(dates);
    setActivePreset(null);
  }

  const handleAddressDateChange = (dates: any) => {
    setAddressDateRange(dates);
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
              setProofDateRange(preset.value);
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
                <div>Number of Proofs Generated: <span className="chart-count">{proofNum.toLocaleString()}</span></div>
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
                    value={proofDateRange}
                    onChange={handleProofDateChange}
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
                    title='Select Start Date'
                    visible={startVisible}
                    onClose={() => {
                      setStartVisible(false)
                    }}
                    max={now}
                    defaultValue={startDate}
                    confirmText="OK"
                    cancelText=""
                    onConfirm={handleStartConfirm}
                    precision="hour"
                  />
                  <MobileDatePicker
                    title='Select End Date'
                    visible={endVisible}
                    onClose={() => {
                      setEndVisible(false)
                    }}
                    max={now}
                    defaultValue={endDate}
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
              series={proofChartValue}
              xAxis={proofChartDate}
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
                    value={appsDateRange}
                    onChange={handleAppsDateChange}
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
                    title='Select Start Date'
                    visible={startVisible}
                    onClose={() => {
                      setStartVisible(false)
                    }}
                    max={now}
                    defaultValue={startDate}
                    confirmText="OK"
                    cancelText=""
                    onConfirm={handleStartConfirm}
                    precision="hour"
                  />
                  <MobileDatePicker
                    title='Select End Date'
                    visible={endVisible}
                    onClose={() => {
                      setEndVisible(false)
                    }}
                    max={now}
                    defaultValue={endDate}
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
                    value={addressDateRange}
                    onChange={handleAddressDateChange}
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
                    title='Select Start Date'
                    visible={startVisible}
                    onClose={() => {
                      setStartVisible(false)
                    }}
                    max={now}
                    defaultValue={startDate}
                    confirmText="OK"
                    cancelText=""
                    onConfirm={handleStartConfirm}
                    precision="hour"
                  />
                  <MobileDatePicker
                    title='Select End Date'
                    visible={endVisible}
                    onClose={() => {
                      setEndVisible(false)
                    }}
                    max={now}
                    defaultValue={endDate}
                    confirmText="OK"
                    cancelText=""
                    onConfirm={handleEndConfirm}
                    precision="hour"
                  />
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