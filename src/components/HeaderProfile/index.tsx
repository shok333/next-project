"use client";
import { Avatar, Spin } from "antd";
import { AuthList } from "../AuthList"
import { signOut, useSession } from "next-auth/react"
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { LogonButton } from "../LogonButton";
import { AuthDependsRenderHelper } from "../AuthDependsRenderHelper";

export const HeaderProfile = () => {
  const { status, data } = useSession();
  console.log('data', data)

  return (
    <AuthDependsRenderHelper
      status={status}
      authenticated={
        <div className="grid grid-flow-col auto-cols-max gap-2 items-center">
          <span className="text-white">{data?.user?.name}</span>
          <Avatar
            src={data?.user?.image}
            icon={
              <UserOutlined />
            }
          />
          <LogonButton
            onClick={signOut}
            icon={
              <LogoutOutlined />
            }
          />
        </div>
      }
      unauthenticated={
        <AuthList />
      }
    />
  );
}