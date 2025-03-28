import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface CharProps {
  option: any;
  style?: React.CSSProperties;
  className?: string;
  onRender?: (instance: echarts.ECharts | null) => void;
}

const Char: React.FC<CharProps> = ({ option, style, className, onRender }) => {
  const chartDom = useRef<HTMLDivElement>(null);
  const instance = useRef<echarts.ECharts | null>(null);

  const showLoading = (_instance: echarts.ECharts | null) => {
    if (_instance) {
      _instance.showLoading("default", {
        text: "",
        color: "#c23531",
        textColor: "#000000",
        maskColor: "rgba(255, 255, 255, 0.8)",
        zlevel: 0,
      });
    }
  };

  useEffect(() => {
    if (!chartDom.current) return;

    instance.current =
      echarts.getInstanceByDom(chartDom.current) ||
      echarts.init(chartDom.current);

    const resize = () => instance.current?.resize();
    window.removeEventListener("resize", resize);
    window.addEventListener("resize", resize);

    showLoading(instance.current);

    return () => {
      if (instance.current) {
        echarts.dispose(instance.current);
      }
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    showLoading(instance.current);

    if (option && instance.current) {
      instance.current.hideLoading();
      instance.current.setOption(option);
    }

    if (onRender) {
      onRender(instance.current);
    }
  }, [onRender, option]);

  return <div ref={chartDom} style={style} className={className}></div>;
};

export default Char;