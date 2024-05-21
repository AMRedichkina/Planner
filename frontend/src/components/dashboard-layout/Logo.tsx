import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { Home as HomeIcon } from '@mui/icons-material';

type LogoProps = {
    className?: string;
};

export const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={className}>
            <Box px={6} py={2} position='relative'>
                <Link href='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HomeIcon sx={{ color: 'black', fontSize: 38 }} />
                    <Typography variant='h5' fontWeight='bold' position='relative' color='black'>
                        Time Planner
                    </Typography>
                </Link>
            </Box>

        </div>
    )
}
