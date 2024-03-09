"use client"
import React, { FC, ReactElement } from 'react';
import { SessionProvider } from 'next-auth/react';
import { ApolloWrapper } from '../ApolloWrapper';
import { AntdRegistry } from '../AntdRegistry'
import LocalizationLayout from '../LocalizationLayout';

interface IProvidersProps {
  children: ReactElement;
  locale: string;
}

export const Providers: FC<IProvidersProps> = ({ children, locale }) => {
  return (
    <LocalizationLayout locale={locale}>
      <SessionProvider>
        <AntdRegistry>
          <ApolloWrapper>
            {children}
          </ApolloWrapper>
        </AntdRegistry>
      </SessionProvider>
    </LocalizationLayout>
  )
} 