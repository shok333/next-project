import { IBlogPostQueryArgs } from "../../graphQl/resolvers/BlogPost";
import { connectMongo } from "../connect";
import { BlogPostModel } from "../models/blogPost";

export const blogPosts = async () => {
  try {
    await connectMongo();

    return await BlogPostModel.find();
  } catch (err) {
    console.error(err)
  }
};

export const blogPost = async ({ url }: IBlogPostQueryArgs) => {
  try {
    await connectMongo();

    return await BlogPostModel.findOne({ url });
  } catch (err) {
    console.error(err)
  }
};