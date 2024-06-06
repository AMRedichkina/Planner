import { createTheme } from '@mui/material/styles';


export const lightTheme = createTheme({
    spacing: 16,
    palette: {
        mode: 'light',
        primary: {
            main: '#92828D',
            light: '#9C8D97',
            dark: '#faeaea',
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    fontFamily: 'sans-serif',
                    color: 'black',
                    background: 'linear-gradient(145deg, #d6dbdc, #ffffff)',
                    backgroundSize: 'cover',
                    backgroundBlendMode: 'multiply',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)',
                        backgroundBlendMode: 'multiply',
                        pointerEvents: 'none',
                        zIndex: -1,
                    }
                }
            }
        }
    }
});


export const darkTheme = createTheme({
    spacing: lightTheme.spacing,
    palette: {
        mode: 'dark',
        primary: {
            main: '#7d7279',
            light: '#84747f',
            dark: '#faeaea',
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    fontFamily: 'sans-serif',
                    color: 'white',
                    background: 'linear-gradient(145deg, #424242, #303030)',
                    backgroundSize: 'cover',
                    backgroundBlendMode: 'multiply',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%)',
                        backgroundBlendMode: 'multiply',
                        pointerEvents: 'none',
                        zIndex: -1,
                    }
                }
            }
        }
    }
});
