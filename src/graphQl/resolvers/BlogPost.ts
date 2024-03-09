import { connectMongo } from "../../mongoose/connect";
import { BlogPostModel } from "../../mongoose/models/blogPost";

interface IBlogPostArgs {
  url: string;
}

export const BlogPost = {
  Query: {
    blogPosts: async () => {
      await connectMongo();

      return await BlogPostModel.find();
    },
    blogPost: async (parent: any, { url }: IBlogPostArgs) => {
      await connectMongo();

      return await BlogPostModel.findOne({ url });
    },
  },

  Mutation: {
    createPost: (parent: any, args: any) => {
      console.log(parent, args)

      return {
        title: args.title,
        date: args.date,
        author: args.author,
        url: args.url,
        content: [],
      }
    }
  },
}