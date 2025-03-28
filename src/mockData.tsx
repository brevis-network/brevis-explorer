import { JSX } from "react";
import { getWidth } from "./util";

export interface AppColumn {
  label: string;
  value: string;
}

export const appColumns: AppColumn[][] = [
  [
    { label: 'All Apps', value: 'all' },
    { label: 'UNISWAP', value: 'uniswap' },
    { label: 'PANCAKE', value: 'pancake' },
  ],
];

// export interface AppOption {
//   label: string;
//   value: string;
// }

// export const appOptions: AppOption[] = {
//   [
//     { label: 'All Apps', value: 'all' },
//     { label: 'UNISWAP', value: 'uniswap' },
//     { label: 'PANCAKE', value: 'pancake' },
//   ]
// }


interface StatisticItem {
  value: number;
  description: string;
}

interface StatisticsData {
  totalProofs: StatisticItem;
  totalTransactions: StatisticItem;
  totalGas: StatisticItem;
  totalUsers: StatisticItem;
  totalApps: StatisticItem;
  totalNodes: StatisticItem;
}

// 顶部统计卡片数据
export const statisticsData: StatisticsData = {
  totalProofs: {
    value: 2721079657,
    description: 'Number of Proofs Generated'
  },
  totalTransactions: {
    value: 668657,
    description: 'Number of Transactions'
  },
  totalGas: {
    value: 21066889,
    description: 'Total Gas Used'
  },
  totalUsers: {
    value: 79657,
    description: 'Number of Unique Users'
  },
  totalApps: {
    value: 680,
    description: 'Number of Apps Integrated'
  },
  totalNodes: {
    value: 898,
    description: 'Number of Nodes'
  }
};

// 图表数据 - 生成模拟的柱状图数据
const generateChartData = (count: number, maxValue: number) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      date: `Day ${i + 1}`,
      value: Math.floor(Math.random() * maxValue) + 10
    });
  }
  return data;
};

interface ChartDataItem {
  date: string;
  value: number;
}

interface ChartConfig {
  data: ChartDataItem[];
  xField: string;
  yField: string;
  columnStyle?: { width: number };
  axis?: {
    x: {
      lineLineWidth: number;
      lineStroke: string;
      tickStroke: string;
      labelFill: string;
      labelFontSize: number;
      labelFontWeight: number;
      labelFilter?: (d: any, index: number, data: any[]) => boolean;
      labelAutoRotate: boolean;
    };
    y: {
      tick: boolean;
      labelFill: string;
      labelFontSize: number;
      labelFontWeight: number;
      labelAutoRotate: boolean;
    };
  };
  state?: {
    active: { fill: string };
    inactive: { opacity: number };
  };
  interaction?: {
    elementHighlight: boolean;
    tooltip: {
      position: string;
      crosshairs?: {};
      render: (event: any, params: { title: string; items: any[] }) => JSX.Element;
    };
  };
  style?: {
    fill: string;
  };
}

interface ChartData {
  title: string;
  count: string;
  data: number[];
  xAxis: string[];
  config: ChartConfig;
}

interface ChartsData {
  proofsGenerated: ChartData;
}

export const chartsData: ChartsData = {
  proofsGenerated: {
    title: 'Number of Proofs Generated',
    count: '1,079,657',
    data: [800,1300,1000,300,758,130,623,500,319,900,422,110,40,140,120,220,358,120,1513,1200,1388,900,597,870,597,388,597,688,597,597,597],
    xAxis: ['Aug 30', 'Sep 01', 'Sep 02', 'Sep 03', 'Sep 04', 'Sep 05','Sep 06','Sep 07','Sep 08','Sep 09','Sep 10','Sep 11','Sep 12', 'Sep 13','Sep 14','Sep 15','Sep 16','Sep 17','Sep 18', 'Sep 19', 'Sep 20', 'Sep 21','Sep 22','Sep 23','Sep 24','Sep 25','Sep 26','Sep 27','Sep 28','Sep 29','Sep 30'],
    config: {
      data: [
        { date: 'Aug 30', value: 800 },
        { date: 'Sep 01', value: 1300 },
        { date: 'Sep 02', value: 1000 },
        { date: 'Sep 03', value: 300 },
        { date: 'Sep 04', value: 758 },
        { date: 'Sep 05', value: 130 },
        { date: 'Sep 06', value: 623 },
        { date: 'Sep 07', value: 500 },
        { date: 'Sep 08', value: 319 },
        { date: 'Sep 09', value: 900 },
        { date: 'Sep 10', value: 422 },
        { date: 'Sep 11', value: 110 },
        { date: 'Sep 12', value: 40 },
        { date: 'Sep 13', value: 140 },
        { date: 'Sep 14', value: 120 },
        { date: 'Sep 15', value: 220 },
        { date: 'Sep 16', value: 358 },
        { date: 'Sep 17', value: 120 },
        { date: 'Sep 18', value: 1513 },
        { date: 'Sep 19', value: 1200 },
        { date: 'Sep 20', value: 1388 },
        { date: 'Sep 21', value: 900 },
        { date: 'Sep 22', value: 597 },
        { date: 'Sep 23', value: 870 },
        { date: 'Sep 24', value: 597 },
        { date: 'Sep 25', value: 388 },
        { date: 'Sep 26', value: 597 },
        { date: 'Sep 27', value: 688 },
        { date: 'Sep 28', value: 597 },
        { date: 'Sep 29', value: 597 },
        { date: 'Sep 30', value: 597 },
      ],
      xField:'date',
      yField:'value',
      columnStyle: { width: 20 },
      axis: {
        x: {
          lineLineWidth: 1,
          lineStroke: "rgba(255, 252, 228, 1)",
          tickStroke: "rgba(255, 252, 228, 1)",
          labelFill: "rgba(255, 252, 228, 1)",
          labelFontSize: getWidth() <= 375 ? 12 : 14,
          labelFontWeight: 400,
          labelFilter: (d, index, data) => {
            if (getWidth() <= 375) {
              return index === 0 || index % 10 === 0
            } 
            return index % 2 === 0
          },
          labelAutoRotate: false,
        },
        y: {
          tick: false,
          labelFill: "rgba(255, 252, 228, 1)",
          labelFontSize: getWidth() <= 375 ? 12 : 14,
          labelFontWeight: 400,
          labelAutoRotate: false,
        },
      }, 
      state: {
        active: { fill: '#FFEA83'},
        inactive: { opacity: 1 }
      },
      interaction: {
        elementHighlight: true,
        tooltip: { 
          position: "top",
          crosshairs: {
          
          },
          render: (event, { title, items }) => 
          <div className="chart-tooltip">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>Date:<span style={{ fontWeight: "bolder", color: "#000" }}>{title}</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>Number: <span style={{ fontWeight: "bolder", color: "#3736DC" }}>{items[0].value}</span></div>
          </div>,

        }
      },
      style: {
        fill: '#E6E3CC',
      },
    },
  },
};

interface AppData {
  id: number;
  name: string;
  description: string;
  price: string;
  txCount: string;
  proofCount: string;
  gas: string;
  avgTxFee: string;
  avgProofSize: string;
}

export const appsData: AppData[] = [
  {
    id: 1,
    name: 'uniswap',
    description: 'Uniswap products are powered by the Uniswap Protocol. The protocol is the largest onchain marketplace, with billions of dollars in weekly volume across.',
    price: '$8,999',
    txCount: '7,999',
    proofCount: '7,999',
    gas: '???',
    avgTxFee: '$1',
    avgProofSize: '200'
  },
  {
    id: 2,
    name: 'uniswap',
    description: 'Decentralized trading protocol on Ethereum that allows for automated, permissionless token exchange.',
    price: '$8,999',
    txCount: '7,999',
    proofCount: '7,999',
    gas: '???',
    avgTxFee: '$1',
    avgProofSize: '200'
  },
  {
    id: 3,
    name: 'uniswap',
    description: 'Decentralized trading protocol on Ethereum that allows for automated, permissionless token exchange.',
    price: '$8,999',
    txCount: '7,999',
    proofCount: '7,999',
    gas: '???',
    avgTxFee: '$1',
    avgProofSize: '200'
  },
  {
    id: 4,
    name: 'uniswap',
    description: 'Decentralized trading protocol on Ethereum that allows for automated, permissionless token exchange.',
    price: '$8,999',
    txCount: '7,999',
    proofCount: '7,999',
    gas: '???',
    avgTxFee: '$1',
    avgProofSize: '200'
  },
  {
    id: 5,
    name: 'uniswap',
    description: 'Decentralized trading protocol on Ethereum that allows for automated, permissionless token exchange.',
    price: '$8,999',
    txCount: '7,999',
    proofCount: '7,999',
    gas: '???',
    avgTxFee: '$1',
    avgProofSize: '200'
  },
  {
    id: 6,
    name: 'uniswap',
    description: 'Decentralized trading protocol on Ethereum that allows for automated, permissionless token exchange.',
    price: '$8,999',
    txCount: '7,999',
    proofCount: '7,999',
    gas: '???',
    avgTxFee: '$1',
    avgProofSize: '200'
  },
  {
    id: 7,
    name: 'uniswap',
    description: 'Decentralized trading protocol on Ethereum that allows for automated, permissionless token exchange.',
    price: '$8,999',
    txCount: '7,999',
    proofCount: '7,999',
    gas: '???',
    avgTxFee: '$1',
    avgProofSize: '200'
  },
];