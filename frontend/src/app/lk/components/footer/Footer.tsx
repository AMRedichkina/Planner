import { Box, Typography } from '@mui/material';

type FooterProps = {
    className?: string;
};

export const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <Box className={className} sx={{textAlign: 'center', padding: '20px' }}>
            <Typography variant="body2">
                2024 &copy; Aleksandra Redichkina
                <br /> All rights reserved.
            </Typography>
        </Box>
    );
};
