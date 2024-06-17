import { useQuery } from '@tanstack/react-query'
import { analyticsService } from '../services/analytics.service'


export function useAnalytics() {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['analytics'],
		queryFn: async () => analyticsService.getAnalytics()
	})
	return { data, isLoading, isSuccess }
}
