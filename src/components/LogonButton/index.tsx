import { Button } from 'antd';
import React, { FC, ReactNode } from 'react';

interface ILogonButtonProps {
  icon: ReactNode;
  onClick(): void;
}

export const LogonButton: FC<ILogonButtonProps> = ({ icon, onClick }) => {
  return (
    <Button
      className="
        inline-flex
        justify-center
        items-center
      text-white 
      fill-white 
      hover:fill-customBlue"
      shape="circle"
      icon={icon}
      onClick={onClick}
    />
  );
};