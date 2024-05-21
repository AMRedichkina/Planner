import React, { forwardRef } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { COLORS } from '../../../constants/color.constants'

interface InputFieldProps extends Omit<TextFieldProps, 'variant'> {
	id: string;
	label: string;
	extra?: string;
	state?: 'error' | 'success';
	isNumber?: boolean;
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
	({ label, id, extra, state, disabled, isNumber, ...rest }, ref) => {
		return (
			<div className={extra}>
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
							color: state === 'error' ? 'red' : COLORS.tuapeGray,
							'&.Mui-focused': {
								color: state === 'error' ? 'red' : COLORS.tuapeGrayDark,
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
								borderColor: COLORS.paleDogwood,
							},
							'&:hover fieldset': {
								borderColor: COLORS.tuapeGrayDark,
							},
							'&.Mui-focused fieldset': {
								borderColor: COLORS.tuapeGrayDark,
							},
						},
					}}
					{...rest}
				/>
			</div>
		);
	}
);

Field.displayName = 'Field';
