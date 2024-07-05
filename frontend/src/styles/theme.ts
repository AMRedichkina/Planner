import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Define the base theme configuration for light mode
let baseTheme = createTheme({
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
            default: '#FFFFFF',
            paper: '#F5F5F5',
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
        h6: {
            fontSize: '1.0rem',
            fontWeight: 'bold',
            color: '#5e6c84',
            textAlign: 'left',
            padding: '16px',
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
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    maxWidth: 300,
                    margin: '8px',
                    boxShadow: '0px 1px 4px rgba(9, 30, 66, 0.25)',
                    overflow: 'hidden',
                    border: '1px solid #dfe1e6',
                    borderRadius: '3px',
                    backgroundColor: '#ffffff',
                    '@media (max-width:600px)': {
                        maxWidth: '100%',
                        margin: '4px',
                        boxShadow: '0px 0px 2px rgba(9, 30, 66, 0.25)'
                    }
                }
            }
        }
    }
});

// Make light theme responsive
let lightTheme = responsiveFontSizes(baseTheme, {
    breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
});

// Define dark theme based on the light theme but with specific overrides for dark mode
let darkTheme = createTheme(baseTheme, {
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
    components: {
        ...baseTheme.components,
        MuiButton: {
            ...baseTheme.components.MuiButton,
            styleOverrides: {
                ...baseTheme.components.MuiButton.styleOverrides,
                root: {
                    ...baseTheme.components.MuiButton.styleOverrides.root,
                    color: '#E0E0E0',
                    '&:hover': {
                        backgroundColor: '#1565C0',
                    },
                    '&:active': {
                        backgroundColor: '#0D47A1',
                    },
                }
            }
        },
        MuiCard: {
            ...baseTheme.components.MuiCard,
            styleOverrides: {
                ...baseTheme.components.MuiCard.styleOverrides,
                root: {
                    ...baseTheme.components.MuiCard.styleOverrides.root,
                    backgroundColor: '#333333',
                    border: '1px solid #424242',
                }
            }
        }
    }
});

// Make dark theme responsive
darkTheme = responsiveFontSizes(darkTheme, {
    breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
});

export { lightTheme, darkTheme };
