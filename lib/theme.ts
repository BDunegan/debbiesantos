import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    maroon: "#660000",
    maroonDark: "#600018",
    purple: "#4B0082",
    purpleLight: "#6B3FA0",
    purpleAccent: "#9370DB",
    neutral100: "#FFFFFF",
    neutral200: "#F5F5F5",
    neutral300: "#E5E5E5",
    neutral400: "#D4D4D4",
    neutral500: "#A3A3A3",
    neutral600: "#737373",
    neutral700: "#525252",
    neutral800: "#404040",
    neutral900: "#262626",
    white: "#FFFFFF",
    black: "#000000",
    accent: "#F3E8FF",
    border: "#E5E5E5",
  },
  font: {
    base: 'var(--font-geist-sans), "Inter", "Segoe UI", "Arial", sans-serif',
    size: "1rem",
    heading: "2rem",
    subheading: "1.5rem",
    small: '0.95rem',
  },
  space: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  shadow: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
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
      accent: string;
      border: string;
    };
    font: {
      base: string;
      size: string;
      heading: string;
      subheading: string;
      small: string;
    };
    space: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
    };
    shadow: {
      sm: string;
      md: string;
      lg: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
} 