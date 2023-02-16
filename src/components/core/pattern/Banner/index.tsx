import { StaticImageData } from 'next/image';
import Button from '../../common/Button';

import * as S from './styled';

type BannerProps = {
  dotPostion?: 'top' | 'bottom' | 'left' | 'right';
  data: {
    id: string | number;
    titleline1: string;
    titleline2: string;
    image: string | StaticImageData;
    showBtn?: boolean;
  }[];
  showBtn?: boolean;
};

export default function Banner({ data, dotPostion = 'bottom' }: BannerProps) {
  return (
    <S.WrapBanner dotPosition={dotPostion} easing="easeOutQuart">
      {data?.map((item) => (
        <S.SlideBanner key={item?.id} bgImg={item?.image}>
          <h1>{item?.titleline1}</h1>
          <h1>{item?.titleline2}</h1>
          {item?.showBtn && (
            <Button margin="80px 0 0 0" backgroundColor="#EB9B01">
              Action Button
            </Button>
          )}
        </S.SlideBanner>
      ))}
    </S.WrapBanner>
  );
}
