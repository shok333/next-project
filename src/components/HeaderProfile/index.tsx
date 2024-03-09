"use client";
import { Avatar, Spin } from "antd";
import { AuthList } from "../AuthList"
import { signOut, useSession } from "next-auth/react"
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { LogonButton } from "../LogonButton";

export const HeaderProfile = () => {
  const { status, data } = useSession();

  switch (status) {
    case 'authenticated':
      return (
        <div className="grid gap-1 grid-cols-2">
          <Avatar
            src={data.user?.image}
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
      )

    case 'loading':
      return (
        <Spin />
      );

    default:
      return (
        <AuthList />
      );
  }
}