"use client";
import { FC } from "react";
import { Layout, Typography } from "antd";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { BLOG_POST } from "../../../../queries/blogPost";
import { IBlogPostData } from "../../../../interfaces/blogPostData";
import { BlogPostRenderer } from "../../../../components/BlogPostRenderer";
import { Comments } from "../../../../components/Comments";

interface IBlogPostProps {
  params: {
    url: string,
    language: string,
  }
}

const BlogPost: FC<IBlogPostProps> = ({ params: { url, language } }: IBlogPostProps) => {
  const { data } = useSuspenseQuery<IBlogPostData>(BLOG_POST, {
    variables: { url },
  });

  return (
    <Layout.Content>
      <Typography.Title>{data.blogPost.title}</Typography.Title>
      <BlogPostRenderer items={data.blogPost.content} />
      <Comments className="mt-6" />
    </Layout.Content>
  )
}

export default BlogPost;
