import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

// export function generateStaticParams() {
//   return [{ locale: 'ru' }, { locale: 'en' }];
// }

export default async function LocalizationLayout({
  children,
  locale
}: {
  children: React.ReactNode,
  locale: string
}) {
  let dict
  try {
    dict = (await import(`../../localization/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={dict}>
      {children}
    </NextIntlClientProvider>
  )
}


// import { NextIntlClientProvider } from 'next-intl';
// // import { notFound } from 'next/navigation';
// import { useEffect, useState } from 'react';

// // export function generateStaticParams() {
// //   return [{ locale: 'ru' }, { locale: 'en' }];
// // }

// export default function LocalizationLayout({
//   children,
//   locale
// }: {
//   children: React.ReactNode,
//   locale: string
// }) {
//   const [messages, messagesChange] = useState();

//   useEffect(() => {
//     import(`../../localization/${locale}.json`).then((dict) => {
//       messagesChange(dict.default)
//     })
//   }, [locale])
//   // let dict;

//   // try {
//   //   dict = (await import(`../../localization/${locale}.json`)).default;
//   // } catch (error) {
//   //   notFound();
//   // }

//   return (
//     <NextIntlClientProvider locale={locale} messages={messages}>
//       {children}
//     </NextIntlClientProvider>
//   )
// }