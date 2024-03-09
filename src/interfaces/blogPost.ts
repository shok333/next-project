import { IBlogPostDataContent } from "./blogPostDataContent";

export interface IBlogPost {
  title: string,
  author: string,
  id: string,
  url: string,
  content: Array<IBlogPostDataContent>,
}