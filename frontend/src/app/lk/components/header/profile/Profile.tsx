'use client';

import { useProfile } from '@/hooks/useProfile';
import { Avatar, Box, Typography } from '@mui/material';
import { LogoutButton } from '../logoutButton/LogoutButton';
import { COLORS } from '@/constants/color.constants';
import styles from './Profile.module.css';

export function Profile() {
	const { data } = useProfile();

	return (
		<Box className={styles.profileContainer}>
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
		</Box>
	)
}
