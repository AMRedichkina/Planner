import { useEffect } from 'react'
import { UseFormReset } from 'react-hook-form'

import { useSettings } from '@/hooks/useSettings'
import { ISettings } from '@/types/settings.types'


export function useInitialData(reset: UseFormReset<ISettings>) {
	const { data, isSuccess } = useSettings()

	useEffect(() => {
		if (isSuccess && data) {
			reset({
				breakInterval: data.breakInterval,
				intervalCount: data.intervalCount,
				workInterval: data.workInterval
			})
		}
	}, [isSuccess, data, reset])
}
