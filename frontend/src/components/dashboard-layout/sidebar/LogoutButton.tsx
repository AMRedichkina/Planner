'use client'

import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { IconButton } from '@mui/material'
import { COLORS } from '../../../constants/color.constants'

import { authService } from '@/services/auth.service'

export function LogoutButton() {
	const router = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push('/auth'),
	})

	return (
		<IconButton
			sx={{
				position: 'absolute',
				top: 8,
				right: 8,
				color: COLORS.tuapeGrayDark,
				transition: 'opacity 0.3s',
				'&:hover': {
					opacity: 1,
				},
			}}
			onClick={() => mutate()}
		>
			<LogOut size={20} />
		</IconButton>
	)
}
