'use client'

import { useProfile } from '@/hooks/useProfile'
import { CircularProgress, Avatar, Box, Typography } from '@mui/material'

export function Profile() {
	const { data, isLoading } = useProfile()
	console.log(`profile ${data}`)

	return (
		<Box
			sx={{
				position: 'absolute',
				top: 'var(--big-layout)',
				right: 'var(--big-layout)',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			{isLoading ? (
				<CircularProgress />
			) : (
				<Box display='flex' alignItems='center'>
					<Box textAlign='right' mr={3}>
						<Typography variant='body1' fontWeight='bold' mb={-1}>
							{data?.name}
						</Typography>
						<Typography variant='body2' color='textSecondary'>
							{data?.email}
						</Typography>
					</Box>
					<Avatar sx={{ bgcolor: 'white', color: 'primary.main' }}>
						{data?.name?.charAt(0).toUpperCase() || 'A'}
					</Avatar>
				</Box>
			)}
		</Box>
	)
}
