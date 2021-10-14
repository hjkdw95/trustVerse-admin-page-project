import React from 'react';
import NavBar from './NavBar';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Component / NavBar',
  component: NavBar,
  decorators: [withKnobs],
};

export const primary = () => <NavBar primary />;
