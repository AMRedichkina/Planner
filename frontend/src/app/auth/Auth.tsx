'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, IconButton, InputAdornment } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { toast } from 'sonner';
import { IAuthForm } from '@/types/auth.types';
import { DASHBOARD_PAGES } from '@/configs/pages-url.config';
import { authService } from '@/services/auth.service';
import { validationSchema } from '../../validation/validationSchema';
import ThemeProvider from '@/components/ThemeProvider';
import { Button, TransparentButton, Field, Heading } from '@/components';
import { StyledPaper, StyledBox, FormBox } from './AuthStyles';


export function Auth() {
	const [isLoginForm, setIsLoginForm] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const { register, handleSubmit, reset, formState: { errors } } = useForm<IAuthForm>({
		mode: 'onChange',
		resolver: yupResolver(validationSchema),
		context: { isLoginForm }
	});

	const { push } = useRouter();

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success('Successfully logged in!');
			reset();
			push(DASHBOARD_PAGES.HOME);
		},
		onError(error: any) {
			toast.error(error?.response?.data?.message || 'An error occurred during authentication');
		}
	});

	const onSubmit: SubmitHandler<IAuthForm> = (data) => {
		console.log('Form submitted:', data);
		mutate(data);
	};

	return (
		<ThemeProvider>
			<Container maxWidth="sm">
				<StyledBox>
					<StyledPaper elevation={3}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Heading title='Authorization' />
							<Field
								id='email'
								label='Email:'
								placeholder='Enter email:'
								type='email'
								extra='mb-4'
								{...register('email')}
								error={!!errors.email}
								helperText={errors.email?.message}
							/>

							<Field
								id='password'
								label='Password:'
								placeholder='Enter password:'
								type={showPassword ? 'text' : 'password'}
								fullWidth
								margin="normal"
								{...register('password')}
								error={!!errors.password}
								helperText={errors.password?.message}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												onClick={() => setShowPassword(!showPassword)}
												edge="end"
											>
												{showPassword ? <Visibility /> : <VisibilityOff />}
											</IconButton>
										</InputAdornment>
									)
								}}
							/>

							{!isLoginForm && (
								<Field
									id='confirmPassword'
									label='Confirm Password:'
									placeholder='Confirm password:'
									type={showConfirmPassword ? 'text' : 'password'}
									fullWidth
									margin="normal"
									{...register('confirmPassword')}
									error={!!errors.confirmPassword}
									helperText={errors.confirmPassword?.message}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													onClick={() => setShowConfirmPassword(!showConfirmPassword)}
													edge="end"
												>
													{showConfirmPassword ? <Visibility /> : <VisibilityOff />}
												</IconButton>
											</InputAdornment>
										)
									}}
								/>
							)}

							<FormBox>
								<Button type='submit'>{isLoginForm ? 'Login' : 'Register'}</Button>
								<TransparentButton type='button' onClick={() => setIsLoginForm(!isLoginForm)}>
									{isLoginForm ? 'Switch to Register' : 'Switch to Login'}
								</TransparentButton>
							</FormBox>
						</form>
					</StyledPaper>
				</StyledBox>
			</Container>
		</ThemeProvider>
	);
}
