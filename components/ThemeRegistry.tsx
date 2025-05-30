'use client';

import { ThemeProvider } from 'styled-components';
import { theme } from '@/lib/theme';
import type { DefaultTheme } from 'styled-components';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      {children}
    </ThemeProvider>
  );
} 