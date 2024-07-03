'use client'

import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { IconButton } from '@mui/material'
import styles from './LogoutButton.module.scss';

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
			className={styles.logoutButton}
			onClick={() => mutate()}
		>
			<LogOut size={20} />
		</IconButton>
	)
}
