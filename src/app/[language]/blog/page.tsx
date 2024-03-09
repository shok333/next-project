"use client";
import { FC } from "react";
import { BlogPostList } from "../../../components/BlogPostList";

interface IBlogProps {
  params: {
    language: string,
  }
}

const Blog: FC<IBlogProps> = ({
  params: {
    language,
  }
}) => {
  return (
    <BlogPostList language={language} />
  )
}

export default Blog;
