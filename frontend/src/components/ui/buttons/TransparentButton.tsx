import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';
import cn from 'clsx';
import { COLORS } from '../../../constants/color.constants';

type TypeButton = ButtonProps;

export function TransparentButton({ children, className, ...rest }: TypeButton) {
    return (
        <MuiButton
            className={cn(className)}
            sx={{
                fontSize: '1rem',
                fontWeight: '500',
                color: COLORS.tuapeGrayDark,
                padding: '0',
                minWidth: '0',
                backgroundColor: 'transparent',
                border: 'none',
                '&:hover': {
                    textDecoration: 'underline',
                },
                '&:active': {
                    textDecoration: 'none',
                }
            }}
            {...rest}
        >
            {children}
        </MuiButton>
    );
};
