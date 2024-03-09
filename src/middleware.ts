import { i18nRouter } from 'next-i18n-router';
import { NextRequest } from 'next/server';

// import { languageMiddleware } from './middlewares/languageMiddleware';

// export const middleware = (request: NextRequest) => {
//   let response = languageMiddleware(request);

//   return response;
//

export function middleware(request: NextRequest) {
  return i18nRouter(request, {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    prefixDefault: true,
  });
}

export const config = {
  matcher: '/((?!api|static|graphql|.*\\..*|_next).*)'
};