import { gql } from "apollo-server-micro";

export const Comment = gql`
  type Comment {
    _id: ID
    authorId: String
    text: String
    dateTime: String
    likeAuthorIds: [String]
  }

  type Query {
    comments: [Comment]
  }
`;