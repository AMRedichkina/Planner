import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let lightTheme = createTheme({
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
    components: {
        MuiPaper: {
            styleOverrides: {
              root: {
                overflow: 'visible',
              },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    paddingY: '8px',
                    paddingX: '28px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    color: '#FFFFFF',
                    marginBottom: '12px',
                    transition: 'background-color 0.3s',
                    '&:hover': {
                        backgroundColor: '#1976D2',
                    },
                    '&:active': {
                        backgroundColor: '#0056b3',
                    },
                },
                text: {
                    color: 'inherit',
                    boxShadow: 'none',
                    backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        textDecoration: 'underline'
                    },
                    '&:active': {
                        backgroundColor: 'transparent'
                    }
                }
            }
        }
    }
});

lightTheme = responsiveFontSizes(lightTheme, {
    breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
  });

let darkTheme = createTheme({
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
    components: lightTheme.components,
});


darkTheme = responsiveFontSizes(darkTheme, {
    breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
  });

export { lightTheme, darkTheme };