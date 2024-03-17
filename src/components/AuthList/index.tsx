"use client";
import { FC } from "react";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";
import { LogonButton } from "../LogonButton";
import { YandexIcon } from "./icons/YandexIcon";

const dataSource = [
  {
    name: 'google',
    icon: <GoogleOutlined />,
    onClick: () => signIn('google')
  },
  {
    name: 'yandex',
    icon: <YandexIcon />,
    onClick: () => signIn('yandex')
  },
  {
    name: 'github',
    icon: <GithubOutlined />,
    onClick: () => signIn('github')
  }
]

export const AuthList: FC = () => {
  return (
    <div className="grid gap-2 grid-cols-3 w-fit">
      {
        dataSource.map(({ icon, name, onClick }) => (
          <LogonButton
            key={name}
            icon={icon}
            onClick={onClick}
          />
        ))
      }
    </div>
  )
}