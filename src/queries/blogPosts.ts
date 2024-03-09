import { gql } from '@apollo/client';

export const BLOG_POSTS = gql`
  query BlogPosts {
    blogPosts {
      title,
      author,
      url,
      id: _id
    }
  }
`;