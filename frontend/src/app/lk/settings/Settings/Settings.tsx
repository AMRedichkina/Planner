'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Field } from '@/app/lk/components/ui/Field'

import { ISettings } from '@/types/settings.types'

import { useInitialData } from './useInitialData'
import { useUpdateSettings } from './useUpdateSettings'
import { Box, Button, Grid } from '@mui/material'

export function Settings() {
	const { register, handleSubmit, reset } = useForm<ISettings>({
		mode: 'onChange'
	})

	useInitialData(reset)

	const { isPending, mutate } = useUpdateSettings()

	const onSubmit: SubmitHandler<ISettings> = data => {

		mutate({
			...data
		})
	}

	return (
		<Box sx={{width:'90%', mx:'auto'}}>
			<form
				onSubmit={handleSubmit(onSubmit)}
			>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<Field
							id='workInterval'
							label='Work interval (min.): '
							placeholder='Enter work interval (min.): '
							isNumber
							{...register('workInterval', {
								valueAsNumber: true
							})}
							extra='mb-4'
						/>

						<Field
							id='breakInterval'
							label='Break interval (min.): '
							placeholder='Enter break interval (min.): '
							isNumber
							{...register('breakInterval', {
								valueAsNumber: true
							})}
						/>

						<Field
							id='intervalCount'
							label='Intervals count (max 10): '
							placeholder='Enter intervals count (max 10): '
							isNumber
							{...register('intervalCount', {
								valueAsNumber: true
							})}
						/>
					</Grid>
				</Grid>

				<Button
					type='submit'
					disabled={isPending}
				>
					Save
				</Button>
			</form>
		</Box>
	)
}
