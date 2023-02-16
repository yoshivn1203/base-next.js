import styled from 'styled-components';
import { Carousel } from 'antd';
import { StaticImageData } from 'next/image';

interface BannerPropsStyles {
  bgImg: string | StaticImageData;
}

export const WrapBanner = styled(Carousel)`
  width: 100%;
  height: 100vh;
`;

export const SlideBanner = styled.section<BannerPropsStyles>`
  width: 100%;
  height: 100vh;

  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ bgImg }) =>
    `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${bgImg}'), #000000`};
  background-repeat: none;
  background-position: center;
  background-size: cover;

  h1 {
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 74px;
    text-align: center;
    color: ${({ theme }) => theme.colors.neutralWhite};

    &:nth-child(1) {
      font-weight: 400;
    }

    @media ${(props) => props.theme.breakpoints.xxllMax} {
      font-size: 54px;
    }
  }
`;
