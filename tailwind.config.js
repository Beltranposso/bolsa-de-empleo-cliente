/** @type {import('tailwindcss').Config} */

// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
];
export const theme = {
  extend: {
    colors: {
      'Hueso': ' #fcfcf4 ',
    }, gridTemplateColumns: {
      // Simple 16 column grid
      'la': '20% auto  auto auto  ',
      'le': '22% 45% auto'
      // Complex site-specific column configuration
    }, spacing: {
      '98%': '98%',
      '2000': '2000px',
    }, gridTemplateRows: {
      // Simple 16 row grid
      '100%': '100%',

      // Complex site-specific row configuration
      'layout': '200px minmax(900px, 1fr) 100px',
    }
  },
};
export const darkMode = "class";
export const plugins = [nextui()];

