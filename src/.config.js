import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure(require.context('../src/', true, /\.stories\.(js|jsx)$/), module);

const URL = 'http://localhost:3000/';
export default URL;
