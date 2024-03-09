export interface IComment {
  id: string,
  author: {
    id: string,
    image: string,
    name: string,
  },
  text: string,
  dateTime: string,
  likesCount: number,
}