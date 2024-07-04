import React, { forwardRef } from 'react';
import { TextField, TextFieldProps, useTheme } from '@mui/material';

interface InputFieldProps extends Omit<TextFieldProps, 'variant'> {
	id: string;
	label: string;
	extra?: string;
	state?: 'error' | 'success';
	isNumber?: boolean;
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
	({ label, id, extra, state, disabled, isNumber, ...rest }, ref) => {
		const theme = useTheme();
		return (
			<TextField
				id={id}
				label={label}
				variant="outlined"
				placeholder={rest.placeholder}
				disabled={disabled}
				inputRef={ref}
				fullWidth
				error={state === 'error'}
				helperText={
					state === 'error'
						? 'Error'
						: state === 'success'
							? 'Success'
							: ''
				}
				InputLabelProps={{
                    shrink: true,
                    sx: {
                        color: state === 'error' ? theme.palette.error.main : theme.palette.text.primary,
                        '&.Mui-focused': {
                            color: state === 'error' ? theme.palette.error.main : theme.palette.primary.main,
                        },
                    }
                }}
				InputProps={{
					inputProps: {
						onKeyDown: (event) => {
							if (
								isNumber &&
								!/[0-9]/.test(event.key) &&
								event.key !== 'Backspace' &&
								event.key !== 'Tab' &&
								event.key !== 'Enter' &&
								event.key !== 'ArrowLeft' &&
								event.key !== 'ArrowRight'
							) {
								event.preventDefault();
							}
						},
					},
				}}
				sx={{
                    '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                            borderColor: theme.palette.text.primary, // Default border color
                        },
                        '&:hover fieldset': {
                            borderColor: theme.palette.primary.main, // Border color on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: theme.palette.primary.main, // Border color when focused
                        },
                    },
                    mb: '1rem', // Margin bottom for spacing
                }}
				{...rest}
			/>
	);
}
);

Field.displayName = 'Field'
