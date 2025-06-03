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
    size: {
      xs: '0.875rem',    // 14px
      sm: '1rem',        // 16px - Base size
      md: '1.125rem',    // 18px
      lg: '1.25rem',     // 20px
      xl: '1.5rem',      // 24px
      '2xl': '1.875rem', // 30px
      '3xl': '2.25rem',  // 36px
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
    weight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
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
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      maroon: string;
      maroonDark: string;
      purple: string;
      purpleLight: string;
      purpleAccent: string;
      neutral100: string;
      neutral200: string;
      neutral300: string;
      neutral400: string;
      neutral500: string;
      neutral600: string;
      neutral700: string;
      neutral800: string;
      neutral900: string;
      white: string;
      black: string;
    };
    space: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
    shadow: {
      sm: string;
      md: string;
      lg: string;
    };
    font: {
      base: string;
      heading: string;
      mono: string;
      size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
      };
      lineHeight: {
        tight: string;
        normal: string;
        relaxed: string;
      };
      weight: {
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
      };
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
      full: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
  }
}

export { theme }; 