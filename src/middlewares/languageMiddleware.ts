import { NextRequest, NextResponse } from 'next/server';
import parser from 'accept-language-parser';

const languages = ['en', 'ru'];
const defaultLanguage = languages[0];

const checkIsPathnameHasLanguage = (pathname: string): boolean => {
  return languages.some(
    (language) => pathname.startsWith(`/${language}/`) || pathname === `/${language}`
  )
}

const selectLanguage = (acceptLanguages: string | null) => {
  if (acceptLanguages) {
    const acceptLanguagesArray = parser.parse(acceptLanguages);
    
    const selectedLanguage = acceptLanguagesArray.find(({code}) => (
      languages.find((languagesItem) => (
        languagesItem === code
      ))
    ));

    if (selectedLanguage) {
      return selectedLanguage.code
    }
  }

  return defaultLanguage;
}

export const languageMiddleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl
  const pathnameHasLanguage = checkIsPathnameHasLanguage(pathname)
 
  if (pathnameHasLanguage) {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get('accept-language');

  const language = selectLanguage(acceptLanguage);

  request.nextUrl.pathname = `/${language}${pathname}`;
  
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!_next).*)',
  ],
}