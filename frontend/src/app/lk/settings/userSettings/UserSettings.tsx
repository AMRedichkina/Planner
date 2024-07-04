'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Field } from '@/app/lk/components/ui/Field'

import { TypeUserForm } from '@/types/auth.types'

import { useInitialUserData } from './useInitialUserData'
import { useUpdateUserSettings } from './useUpdateUserSettings'
import { Box, Button, Grid } from '@mui/material'

export function UserSettings() {
	const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: 'onChange'
	})

	useInitialUserData(reset)

	const { isPending, mutate } = useUpdateUserSettings()

	const onSubmit: SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest } = data

		mutate({
			...rest,
			password: password || undefined
		})
	}

	return (
		<Box sx={{ width: '90%', mx: 'auto' }}>
			<form
				onSubmit={handleSubmit(onSubmit)}
			>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} >
						<Field
							id='email'
							label='Email: '
							placeholder='Enter email: '
							type='email'
							{...register('email', {
								required: 'Email is required!'
							})}
						/>

						<Field
							id='name'
							label='Name: '
							placeholder='Enter name: '
							{...register('name')}
						/>

						<Field
							id='password'
							label='Password: '
							placeholder='Enter password: '
							type='password'
							{...register('password')}
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
