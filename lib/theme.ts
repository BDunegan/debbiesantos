import { DefaultTheme } from "styled-components";

const theme = {
  colors: {
    background: '#FFFFFF',
    text: '#333333',
    maroon: '#660000',
    maroonDark: '#600018',
    purple: '#4B0082',
    purpleLight: '#6B3FA0',
    purpleAccent: '#9370DB',
    neutral100: '#FFFFFF',
    neutral200: '#F5F5F5',
    neutral300: '#E5E5E5',
    neutral400: '#D4D4D4',
    neutral500: '#A3A3A3',
    neutral600: '#737373',
    neutral700: '#525252',
    neutral800: '#404040',
    neutral900: '#262626',
    white: '#FFFFFF',
    black: '#000000',
  },
  space: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
  font: {
    base: 'var(--font-inter), "Inter", "Segoe UI", "Arial", sans-serif',
    heading: 'var(--font-inter), "Inter", "Segoe UI", "Arial", sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    size: '1rem',
    subheading: '1.5rem',
    small: '0.95rem',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  }
} as const;

export type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export { theme }; 