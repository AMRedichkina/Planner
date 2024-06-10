'use client';

import { useProfile } from '@/hooks/useProfile';
import { Avatar, Box, Typography } from '@mui/material';
import { LogoutButton } from '../logoutButton/LogoutButton';
import { COLORS } from '@/constants/color.constants';
import styles from './Profile.module.scss';
import useMediaQuery from '@mui/material/useMediaQuery';

export function Profile() {
	const { data } = useProfile();
	const isMobile = useMediaQuery('(max-width:600px)');

	return (
		<Box className={styles.profileContainer}>
			{isMobile ? (
				<>
					<Avatar className={styles.whiteAvatar}>
						{data?.name?.charAt(0).toUpperCase() || 'A'}
					</Avatar>
					<LogoutButton />
				</>
			) : (
				<>
					<Box className={styles.textContainer}>
						<Typography variant='body1' fontWeight='bold' mb={-1} sx={{ color: COLORS.tuapeGrayDark }}>
							{data?.name}
						</Typography>
						<Typography variant='body2' sx={{ color: COLORS.tuapeGrayDark }}>
							{data?.email}
						</Typography>
					</Box>
					<Avatar className={styles.whiteAvatar}>
						{data?.name?.charAt(0).toUpperCase() || 'A'}
					</Avatar>
					<LogoutButton />
				</>
			)}
		</Box>
	);
}