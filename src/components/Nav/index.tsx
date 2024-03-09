"use client";
import React, { FC } from 'react';
import Link from 'next/link'
import { Menu } from 'antd';
import { createRoute } from '../../utils/url';
import { BLOG, CONTACTS, INDEX, MENU } from './constants';
import { useTranslations } from 'next-intl';

interface INavProps {
  language: string,
}

export const Nav: FC<INavProps> = ({ language }) => {
  const t = useTranslations(MENU);

  return (
    <nav>
      <Menu
        disabledOverflow
        theme="dark"
        mode="horizontal"
        items={[
          {
            label: <Link href={createRoute(language, '')}>{t(INDEX)}</Link>,
            key: INDEX,
          },
          {
            label: <Link href={createRoute(language, 'contacts')}>{t(CONTACTS)}</Link>,
            key: CONTACTS,
          },
          {
            label: <Link href={createRoute(language, 'blog')}>{t(BLOG)}</Link>,
            key: BLOG,
          },
        ]} />
    </nav>
  );
};