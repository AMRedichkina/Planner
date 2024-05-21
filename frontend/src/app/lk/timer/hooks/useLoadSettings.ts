import { useSettings } from '@/hooks/useSettings'

export function useLoadSettings() {
	const { data } = useSettings()

	const workInterval = data?.workInterval || 50
	const breakInterval = data?.breakInterval || 10

	return { workInterval, breakInterval }
}
