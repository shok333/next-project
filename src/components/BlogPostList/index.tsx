"use client";
import { Image, List } from 'antd';
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { BLOG_POSTS } from "../../graphQl/queries/blogPosts"
import { IBlogPostsData } from '../../interfaces/blogPostsData';
import { IBlogPost } from '../../interfaces/blogPost';
import Link from 'next/link';
import { FC } from 'react';
import { createRoute } from '../../utils/url';

interface IBlogPostsListProps {
  language: string,
}

export const BlogPostList: FC<IBlogPostsListProps> = ({ language }) => {
  const { data } = useSuspenseQuery<IBlogPostsData>(BLOG_POSTS);

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={data.blogPosts}
      renderItem={({ title, author, id, url }: IBlogPost) => (
        <Link key={id} href={createRoute(language, ['blog', url])}>
          <List.Item
            extra={
              <Image
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              title={title}
              description={author}
            />
          </List.Item >
        </Link>
      )}
    />
  )
}
