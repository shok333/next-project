import { gql } from "apollo-server-micro";

export const BlogPost = gql`
  type BlogPost {
    _id: ID
    title: String
    date: String
    author: String
    url: String
    content: [BlogPostContent]
  }

  type Query {
    blogPosts: [BlogPost]
    blogPost(url: String): BlogPost
  }

  type Mutation {
    createPost(
      title: String
      date: String
      author: String
      url: String
      content: [BlogPostContentInput]
    ): BlogPost
  }
`;