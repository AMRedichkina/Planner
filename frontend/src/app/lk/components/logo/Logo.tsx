import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { Home as HomeIcon } from '@mui/icons-material';
import styles from './Logo.module.scss';

type LogoProps = {
    className?: string;
};

export const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <Box className={`${styles.logo} ${className}`}>
            <Link href='/' className={styles.link}>
                <HomeIcon className={styles.homeIcon} />
                <Typography variant='h5' className={styles.title}>
                    Time Planner
                </Typography>
            </Link>
        </Box>
    )
}
