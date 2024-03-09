import { Input } from "antd"
import { AuthList } from "../AuthList"
import { useTranslations } from 'next-intl';
import { FC } from "react"
import { AUTH_HINT, COMMENTS } from "./constants"
import classNames from "classnames";

interface IAddCommentProps {
  className?: string
}

export const AddComment: FC<IAddCommentProps> = ({
  className
}) => {
  const t = useTranslations(COMMENTS);

  return (
    <div className={classNames('grid gap-2', className)}>
      {t(AUTH_HINT)}
      <AuthList />
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