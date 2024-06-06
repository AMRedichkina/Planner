import { Box, Typography } from '@mui/material';
import { COLORS } from '@/constants/color.constants'

type FooterProps = {
    className?: string;
};

export const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <Box className={className} sx={{ color: COLORS.tuapeGrayDark, textAlign: 'center', padding: '20px' }}>
            <Typography variant="body2">
                2024 &copy; Aleksandra Redichkina
                <br /> All rights reserved.
            </Typography>
        </Box>
    );
};
