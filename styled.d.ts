import 'styled-components';

declare module 'styled-components' {
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
    space: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
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
    shadow: {
      sm: string;
      md: string;
      lg: string;
    };
  }
} 