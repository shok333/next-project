import { createUser } from "../../mongoose/handlers/User";

export interface IUserMutationArgs {
  name: string;
  email: string;
  image?: string;
  provider?: string;
}

export const User = {
  Mutation: {
    createUser: (parent: unknown, args: IUserMutationArgs) => createUser(args)
  },
}