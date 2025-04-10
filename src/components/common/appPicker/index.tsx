import React from 'react';
import { Picker } from 'antd-mobile';

type AppOption = { label: React.ReactNode; value: string };

interface AppPickerProps {
    visible: boolean,
    options: AppOption[][];
    onConfirm: (value: string, lable: string) => void;
    onClose: () => void;
}

const AppPicker: React.FC<AppPickerProps> = ({ visible, options, onConfirm, onClose }) => {
  const handleConfirm = (value: any, extend: any) => {
    onConfirm(value, extend.items[0].label);
  };

  return (
    <>
      <Picker
        columns={options}
        visible={visible}
        onClose={onClose}
        onConfirm={handleConfirm}
        confirmText="OK"
        cancelText=""
      />
    </>
  );
};

export default AppPicker;
