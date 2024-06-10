import { createTheme } from '@mui/material/styles';


export const lightTheme = createTheme({
    spacing: 16,
    palette: {
        mode: 'light',
    },
});


export const darkTheme = createTheme({
    spacing: lightTheme.spacing,
    palette: {
        mode: 'dark',
    },
});
