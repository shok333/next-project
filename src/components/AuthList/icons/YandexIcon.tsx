
import { FC } from "react";
import Icon from "@ant-design/icons/lib/components/Icon";

export const YandexIcon: FC = () => (
  <Icon
    component={
      () => (
        <svg
          width="16px"
          height="16px"
          viewBox="-5.5 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m5.2 24v-7.786l-5.2-13.964h2.616l3.834 10.767 4.41-13.018h2.405l-5.658 16.303v7.697z" />
        </svg>
      )
    }
  />
);