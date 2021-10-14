import React from 'react';
import NavBar from './NavBar';
import { withKnobs, color } from '@storybook/addon-knobs';

export default {
  title: 'Component / NavBar',
  component: NavBar,
  decorators: [withKnobs],
};

const Template = args => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  background: '#0f1a34',
  label: 'DigiFinance',
  size: 16,
  fontWeight: 300,
};
