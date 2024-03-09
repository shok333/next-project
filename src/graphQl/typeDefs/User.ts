import { gql } from "apollo-server-micro";

export const User = gql`
  type User {
    name: String,
    email: String,
    image: String,
    provider: String,
  }

  type Mutation {
    createUser(
      name: String,
      email: String,
      image: String,
      provider: String,
    ): User
  }
`;