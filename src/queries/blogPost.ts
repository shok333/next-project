import { gql } from '@apollo/client';

export const BLOG_POST = gql`
  query BlogPost($url: String) {
    blogPost(url: $url) {
      title,
      date,
      content {
        section,
        text
      }
    }
  }
`;