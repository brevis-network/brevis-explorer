import React from "react";
import Char from "./Char";
import { getWidth } from "../util";

interface BarProps {
  id: string;
  title?: string;
  seriesName: string;
  series: number[];
  xAxis: string[];
  prefix?: string;
}

const Bar: React.FC<BarProps> = ({ id, title, seriesName, series, xAxis, prefix }) => {
  return (
    <div className="bar-content">
      <Char
        key={id}
        option={{
          tooltip: {
            backgroundColor: "#F8F4D7",
            position: function (point: number[], params: any, dom: any, rect: any, size: any) {
              return [
                point[0] - size.contentSize[0] / 2,
                point[1] - size.contentSize[1] - 16,
              ];
            },
            trigger: "axis",
            axisPointer: {
              snap: true,
              type: "cross",
              label: {
                show: false,
              },
            },
            formatter: (params: any) => {
                return `<div>
                  <div style="margin-bottom: 5px; display: flex; justify-content: space-between; color: #3F3F3F;">Date:<span style="color: rgba(0, 0, 0, 0.85); font-weight: 700;">${params[0].name}</span></div>
                  <div style="display: flex; justify-content: space-between; color: #3F3F3F;">Number: <span style="color: #3736DC; font-weight: 700;">${params[0].value}</span></div>
                </div>`;
            },
        },
        grid: {
            top: 20,
            left: 0,
            right: 10,
            bottom: 5,
            containLabel: true,
        },
        xAxis: [
            {
                type: "category",
                data: xAxis,
                axisTick: {
                    alignWithLabel: true,
                    show: true,
                },
                axisLine: {
                    show: false,
                },
                nameTextStyle: {
                    color: "rgba(255, 252, 228, 0.6)",
                    fontSize: 24,
                },
            },
        ],
          yAxis: [
            {
              type: "value",
              splitLine: {
                show: false,
              },
              splitNumber: 3,
            },
          ],
          series: [
            {
              name: seriesName,
              type: "bar",
              barMaxWidth: "28",
              data: series,
              itemStyle: {
                normal: {
                  color: "#E6E3CC",
                },
                emphasis: {
                  color: "#FFEA83",
                },
              },
            },
          ],
        }}
        style={{
          width: "100%",
          height: getWidth() <= 375 ? 168 : 320,
        }}
      />
    </div>
  );
};

export default Bar;