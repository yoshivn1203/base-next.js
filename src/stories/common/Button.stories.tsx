import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../../components/core/common/Button';

import { theme } from '../../styles/theme';

export default {
  title: 'COMMON/Button',
  component: Button,
  argTypes: {
    children: {
      description: 'The content of button',
    },
    color: {
      control: 'color',
      description: 'The color of component',
    },
    backgroundColor: {
      control: 'color',
      description: 'The background-color of component',
    },
    onClick: {
      action: 'clicked',
      description: 'onclick',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  children: 'Button Primary Default',
  type: 'primary',
  color: theme.main.colors.neutralWhite,
  backgroundColor: theme.main.colors.buttonPrimaryDefault,
};

export const SucessDefault = Template.bind({});
SucessDefault.args = {
  children: 'Button Success Default',
  type: 'success',
  color: theme.main.colors.neutralWhite,
  backgroundColor: theme.main.colors.buttonSuccessDefault,
};
