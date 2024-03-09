import { IUserMutationArgs } from "../../graphQl/resolvers/User";
import { connectMongo } from "../connect";
import { UserModel } from "../models/user";

export const createUser = async (args: IUserMutationArgs) => {
  try {
    await connectMongo();

    const profile = await UserModel.findOne({ email: args.email });
    const dateTime = new Date();

    if (profile) {
      await UserModel.updateOne(profile, {
        ...args,
        dateTime: dateTime.toISOString()
      });
    } else {
      await UserModel.create({
        ...args,
        dateTime: dateTime.toISOString()
      });
    }
  } catch (err) {
    console.error(err)
  }
};