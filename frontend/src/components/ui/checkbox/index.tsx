import React from 'react';
import { Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface CustomCheckboxProps extends CheckboxProps {
	extra?: string;
	color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

const theme = createTheme({
	palette: {
		mode: 'light',
		text: {
			primary: '#000000',
		},
	},
});

const Checkbox = ({ id, extra, color = 'primary', ...rest }: CustomCheckboxProps) => {
	return (
		<ThemeProvider theme={theme}>
			<MuiCheckbox
				id={id}
				color={color}
				className={extra}
				{...rest}
			/>
		</ThemeProvider>
	);
}

export default Checkbox;
