import { Spin } from "antd";
import { FC, ReactNode } from "react";

interface IAuthDependsRenderHelperProps {
  status: "authenticated" | "loading" | "unauthenticated",
  authenticated: ReactNode,
  unauthenticated: ReactNode,
}

export const AuthDependsRenderHelper: FC<IAuthDependsRenderHelperProps> = ({
  status,
  authenticated,
  unauthenticated,
}) => {
  switch (status) {
    case 'authenticated':
      return authenticated;

    case 'loading':
      return (
        <Spin />
      );

    default:
      return unauthenticated;
  }
}