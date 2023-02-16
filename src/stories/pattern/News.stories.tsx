import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import News from '../../components/core/pattern/News';

export default {
  title: 'Pattern/News',
  component: News,
} as ComponentMeta<typeof News>;

const Template: ComponentStory<typeof News> = (args) => <News />;

export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {};
