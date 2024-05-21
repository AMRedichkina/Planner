import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';
import cn from 'clsx';
import { COLORS } from '../../../constants/color.constants'

type TypeButton = ButtonProps;

export function Button({ children, className, ...rest }: TypeButton) {
	return (
		<MuiButton
			className={cn(className)}
			sx={{
				borderRadius: '8px',
				bgcolor: COLORS.tuapeGray,
				border: `1px solid ${COLORS.roseQuarz}`,
				paddingY: '8px',
				paddingX: '28px',
				fontSize: '1rem',
				fontWeight: '500',
				color: COLORS.white,
				mb: 3,
				transition: 'background-color 0.3s',
				'&:hover': {
					backgroundColor: COLORS.tuapeGray,
				},
				'&:active': {
					backgroundColor: COLORS.tuapeGrayDark,
				},
			}}
			{...rest}
		>
			{children}
		</MuiButton>
	);
}
