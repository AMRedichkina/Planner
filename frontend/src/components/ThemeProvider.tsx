'use client';

import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Noto_Sans } from 'next/font/google';

const zen = Noto_Sans({
    subsets: ['cyrillic', 'latin'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-zen',
    style: ['normal'],
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#ffffff',
        },
        text: {
            primary: '#000000',
        },
    },
    typography: {
        fontFamily: 'Noto Sans, sans-serif',
    },
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
    <MuiThemeProvider theme={lightTheme}>
        <CssBaseline />
        <div className={zen.className}>{children}</div>
    </MuiThemeProvider>
);

export default ThemeProvider;
