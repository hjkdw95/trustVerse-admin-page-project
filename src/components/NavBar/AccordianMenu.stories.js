import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import AccordianMenu from './AccordianMenu';

export default {
  title: 'Component / NavBar',
  component: AccordianMenu,
  decorators: [withKnobs],
};

const Template = args => <AccordianMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  background: '#0f1a34',
  label: 'DigiFinance',
  size: 16,
  fontWeight: 300,
};
