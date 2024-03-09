import { gql } from '@apollo/client';

export const USER = gql`
  mutation Mutation ($name: String, $email: String, $image: String, $provider: $provider) {
    createUser(name: $name, email: $email, image: $image, provider: $provider) {
      name,
      email,
      image,
      provider,
    }
  }
`;