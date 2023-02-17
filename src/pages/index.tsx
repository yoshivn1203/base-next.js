import { useState } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import React from 'react';

import Filter from '@/components/pages/Filter';

import * as S from './styled';

function Home() {
  const { t } = useTranslation('common');
  const [filter, setFilter] = useState({});

  const onchangeFilter = (item: any) => {
    if (Object.values(item)?.flat().length === 0) {
      const temp = { ...filter };
      delete temp[Object.keys(item)?.[0] as keyof typeof filter];
      setFilter({ ...temp });
    } else {
      setFilter({ ...filter, ...item });
    }
  };

  return (
    <S.Wrapper>
      <Filter filter={filter} onchangeFilter={onchangeFilter} />
      <div>sada</div>
    </S.Wrapper>
  );
}

export default Home;

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
