import { Avatar, Button, Input } from "antd"
import { AuthList } from "../AuthList"
import { useTranslations } from 'next-intl';
import { FC } from "react"
import { AUTH_HINT, COMMENTS, SUBMIT } from "./constants"
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { AuthDependsRenderHelper } from "../AuthDependsRenderHelper";
import { UserOutlined } from "@ant-design/icons";

interface IAddCommentProps {
  className?: string
}

export const AddComment: FC<IAddCommentProps> = ({
  className
}) => {
  const { status, data } = useSession();
  const t = useTranslations(COMMENTS);

  return (
    <div className={classNames('grid gap-2 bg-gray-200 p-2 -mx-2 rounded-md', className)}>
      <AuthDependsRenderHelper
        status={status}
        authenticated={
          <div className="flex justify-between">
            <div className="grid grid-flow-col auto-cols-max gap-6 items-center">
              <Avatar
                src={data?.user?.image}
                icon={
                  <UserOutlined />
                }
              />
              <span>{data?.user?.name}</span>
            </div>
            <Button>
              {t(SUBMIT)}
            </Button>
          </div>
        }
        unauthenticated={
          <>
            {t(AUTH_HINT)}
            <AuthList />
          </>
        }
      />
      <Input.TextArea
        disabled
        // value={value}
        // onChange={(e) => setValue(e.target.value)}
        placeholder="Controlled autosize"
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
    </div>
  )
}