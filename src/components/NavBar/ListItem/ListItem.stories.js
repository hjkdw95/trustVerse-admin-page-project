import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ListItem from './ListItem';

export default {
  title: 'Component / NavList',
  component: ListItem,
  decorators: [withKnobs],
};

const Template = args => <ListItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  iconSize: 16,
  item: 'TAMS',
};

export const Focused = Template.bind({});
Focused.args = { ...Primary.args, hoverBg: '#fff', hoverFontColor: '#000' };
