"use client"

import React, { Dispatch, SetStateAction } from 'react';
import { Box, IconButton, CircularProgress, TextField, InputLabel, FormControl, Select, MenuItem, Checkbox, useTheme } from '@mui/material';
import { DragIndicator, Delete } from '@mui/icons-material';
import { Controller, useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { ITaskResponse, TypeTaskFormState } from '@/types/task.types';
import { useDeleteTask } from '../../hooks/useDeleteTask';
import { useTaskDebounce } from '../../hooks/useTaskDebounce';
import styles from './ListRow.module.scss';

interface IListRow {
	item: ITaskResponse;
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
}

export function ListRow({ item, setItems }: IListRow) {
	const theme = useTheme();
	
	const { register, control, watch } = useForm<TypeTaskFormState>({
		defaultValues: {
			name: item.name,
			isCompleted: item.isCompleted,
			createdAt: item.createdAt,
			priority: item.priority || 'low',
		},
	});

	useTaskDebounce({ watch, itemId: item.id });

	const { deleteTask, isDeletePending } = useDeleteTask();
	const isCompleted = watch('isCompleted');


	return (
		<Box className={`${styles.listRow} ${isCompleted ? styles.completed : ''}`}>
			<IconButton aria-label="Drag Handle">
				<DragIndicator />
			</IconButton>

			<Controller
				control={control}
				name="isCompleted"
				render={({ field }) => (
					<Checkbox onChange={field.onChange} checked={field.value} color="primary" />
				)}
			/>
			<TextField
				{...register('name')}
				variant="outlined"
				// fullWidth
				label="Task Name"
				size="small"
				style={{ display: 'block' }} 
			/>

			<Controller
				control={control}
				name='createdAt'
				render={({ field: { onChange, value, ...restField } }) => (
				<TextField
					{...restField}
					type="date"
					label="Due Date"
					InputLabelProps={{ shrink: true }}
					variant="outlined"
					size="small"
					value={value ? dayjs(value).format('YYYY-MM-DD') : ''}
					onChange={(e) => {
						const dateValue = e.target.value;
						const isoDate = dateValue ? dayjs(dateValue).toISOString() : '';
						onChange(isoDate);
					}}
					/>
				)}
			/>  
			<Controller
				name="priority"
				control={control}
				render={({ field }) => (
				<FormControl variant="outlined" size="small" style={{ display: 'block' }} >
					<InputLabel >Priority</InputLabel>
					<Select
						labelId="priority-label"
						label="Priority"
						{...field}
						onChange={e => field.onChange(e.target.value)}
					>
						<MenuItem value="high" style={{ color: theme.palette.error.main }}>High</MenuItem>
						<MenuItem value="medium" style={{ color: theme.palette.warning.main }}>Medium</MenuItem>
						<MenuItem value="low" style={{ color: theme.palette.success.main }}>Low</MenuItem>
					</Select>
					</FormControl>
				)}
			/>
			
			<IconButton onClick={() => item.id ? deleteTask(item.id) : setItems(prev => prev?.slice(0, -1))}>
				{isDeletePending ? <CircularProgress size='small' /> : <Delete />}
			</IconButton>
		</Box>
	);
}
