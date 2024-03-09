import { blogPost, blogPosts } from "../../mongoose/handlers/BlogPost";

export interface IBlogPostQueryArgs {
  url: string;
}

export const BlogPost = {
  Query: {
    blogPosts: async () => await blogPosts(),
    blogPost: async (parent: unknown, args: IBlogPostQueryArgs) => await blogPost(args),
  },

  Mutation: {
    createPost: (parent: unknown, args: any) => {
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