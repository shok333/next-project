export const createRoute = (language: string, path: string | Array<string>) => {
  const pathString = Array.isArray(path) ? path.join('/') : path;

  return `/${language}/${pathString}`
}