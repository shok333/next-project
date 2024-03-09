import { Avatar, List } from "antd";
import { IComment } from "../../interfaces/comment";
import { AddComment } from "../AddComment";
import { FC } from "react";

const mockItems: Array<IComment> = [
  {
    id: '1',
    author: {
      id: 'authorId',
      image: 'https://lh3.googleusercontent.com/a/ACg8ocIUcaEO6AUNZ6RbPDmmrEj1BBuDgahjpbANRA7rrvHKi1U=s96-c',
      name: 'Дима Герасимов',
    },
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab nam iste sunt sequi modi pariatur cupiditate incidunt? Rerum tenetur omnis fugiat aliquid perferendis incidunt, vitae in tempora, nostrum aliquam officiis.',
    dateTime: '12.01.2024 10:33',
    likesCount: 5,
  },
  {
    id: '2',
    author: {
      id: 'authorId',
      image: 'https://avatars.githubusercontent.com/u/22936752?v=4',
      name: 'Makaveli',
    },
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab nam iste sunt sequi modi pariatur cupiditate incidunt? Rerum tenetur omnis fugiat aliquid perferendis incidunt, vitae in tempora, nostrum aliquam officiis.',
    dateTime: '12.01.2024 10:33',
    likesCount: 5,
  }
]

interface ICommentsProps {
  className?: string
}


export const Comments: FC<ICommentsProps> = ({ className }) => {
  return (
    <div className={className}>
      <List
        className="demo-loadmore-list"
        // loading={initLoading}
        itemLayout="horizontal"
        // loadMore={loadMore}
        dataSource={mockItems}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.author.image} />}
              title={item.author.name}
              description={item.text}
            />
          </List.Item>
        )}
      />
      <AddComment className="mt-4" />
    </div>
  )
}