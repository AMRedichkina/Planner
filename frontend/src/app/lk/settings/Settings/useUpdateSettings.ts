import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { ISettings } from '@/types/settings.types'

import { settingsService } from '@/services/settings.service'

export function useUpdateSettings() {
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['update settings'],
		mutationFn: (data: ISettings) => settingsService.updateSettings(data),
		onSuccess() {
			toast.success('Successfully update settings!')
			queryClient.invalidateQueries({ queryKey: ['settings'] })
		}
	})

	return { mutate, isPending }
}
