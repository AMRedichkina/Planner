import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976D2',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#D32F2F',
            contrastText: '#FFFFFF',
        },
        error: {
            main: '#D32F2F',
        },
        background: {
            default: '#F5F5F5',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#212121',
            secondary: '#757575',
        },
    },
    typography: {
        fontSize: 14,
        h1: {
            fontSize: '2.4rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976D2',
            contrastText: '#212121',
        },
        secondary: {
            main: '#D32F2F',
            contrastText: '#212121',
        },
        error: {
            main: '#D32F2F',
        },
        background: {
            default: '#121212',
            paper: '#424242',
        },
        text: {
            primary: '#E0E0E0',
            secondary: '#BDBDBD',
        },
    },
    typography: lightTheme.typography,
});
