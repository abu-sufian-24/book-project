// tailwind.config.js
const flowbite = require('flowbite/plugin');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Scans all JavaScript/TypeScript files in src
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // Includes Flowbite React components
  ],
  theme: {
    extend: {
      colors: {
        divineGreen: '#00D991',
        customGreen: 'rgba(46, 224, 165, 0.2)', // Correct opacity format for rgba
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font family
      },
    },
  },
  plugins: [flowbite], // Registers Flowbite plugin
};
