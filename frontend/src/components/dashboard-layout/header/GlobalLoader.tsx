'use client'

import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import { CircularProgress, Box } from '@mui/material'

export function GlobalLoader() {
	const isMutating = useIsMutating()
	const isFetching = useIsFetching()

	return isFetching || isMutating ? (
		<Box
			sx={{
				position: 'fixed',
				top: 'var(--layout)',
				right: 'var(--layout)',
				zIndex: 50,
			}}
		>
			<CircularProgress />
		</Box>
	) : null
}
