import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure(require.context('../src/', true, /\.stories\.(js|jsx)$/), module);

const URL = 'http://192.168.1.246:8000/';
export default URL;
