import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Banner from '../../components/core/pattern/Banner';

import imgDefault from '../../../public/images/banner.png';

export default {
  title: 'Pattern/Banner',
  component: Banner,
  argTypes: {
    dotPostion: {
      control: {
        type: 'select',
        options: ['top', 'bottom', 'left', 'right'],
      },
      description: 'Position dot',
      defaultValue: 'bottom',
    },
  },
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const BannerDefault = Template.bind({});
BannerDefault.args = {
  data: [
    {
      id: 1,
      titleline1: 'Strategic Products',
      titleline2: 'Transformative Business',
      image: imgDefault,
      showBtn: true,
    },
    {
      id: 2,
      titleline1: '',
      titleline2: '',
      image: imgDefault,
    },
  ],
};
