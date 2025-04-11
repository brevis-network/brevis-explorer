import React from 'react';
import { DatePicker } from 'antd-mobile';
import './styles.css';

interface MobileDatePickerProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: (value: Date) => void;
  max?: Date;
  defaultValue?: Date;
  title?: string;
  confirmText?: string;
  cancelText?: string;
  precision?: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';
}

const MobileDatePicker: React.FC<MobileDatePickerProps> = ({
  visible,
  onClose,
  onConfirm,
  max,
  defaultValue,
  title = '',
  confirmText = 'OK',
  cancelText = '',
  precision = 'day'
}) => {
  return (
    <DatePicker
      visible={visible}
      onClose={onClose}
      onConfirm={onConfirm}
      max={max}
      min={new Date(2020, 0, 1)}
      defaultValue={defaultValue}
      title={title}
      confirmText={confirmText}
      cancelText={cancelText}
      precision={precision}
      renderLabel={(type, value) => {
        if (type === 'hour') {
          return value + ':00';
        }
        return value;
      }}
    />
  );
};

export default MobileDatePicker;