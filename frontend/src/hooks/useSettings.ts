import { useQuery } from '@tanstack/react-query'
import { settingsService } from '../services/settings.service'


export function useSettings() {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['settings'],
		queryFn: () => settingsService.getSettings()
	})

	return { data, isLoading, isSuccess }
}
