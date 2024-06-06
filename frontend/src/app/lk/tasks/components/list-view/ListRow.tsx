import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { Box, IconButton, CircularProgress } from '@mui/material';
import { DragIndicator, Delete } from '@mui/icons-material';
import { Controller, useForm } from 'react-hook-form';
import Checkbox from '@/components/ui/checkbox';
import { TransparentField } from '@/components/ui/fields/TransparentField';
import { SingleSelect } from '@/components/ui/task-edit/SingleSelect';
import { DatePicker } from '@/components/ui/task-edit/date-picker/DatePicker';
import { ITaskResponse, TypeTaskFormState } from '@/types/task.types';
import { useDeleteTask } from '../../hooks/useDeleteTask';
import { useTaskDebounce } from '../../hooks/useTaskDebounce';
import styles from './ListRow.module.scss';

interface IListRow {
	item: ITaskResponse;
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
}

export function ListRow({ item, setItems }: IListRow) {
	const { register, control, watch } = useForm<TypeTaskFormState>({
		defaultValues: {
			name: item.name,
			isCompleted: item.isCompleted,
			createdAt: item.createdAt,
			priority: item.priority,
		},
	});

	useTaskDebounce({ watch, itemId: item.id });

	const { deleteTask, isDeletePending } = useDeleteTask();
	const isCompleted = watch('isCompleted');

	// TODO: save card's style in bd (connected with task)
	const backgroundColor = useMemo(() => {
		const colors = [
			'var(--color-additional-1)',
			'var(--color-additional-2)',
			'var(--color-additional-3)',
			'var(--color-additional-4)',
			'var(--color-additional-5)',
			'var(--color-additional-6)'];
		return colors[Math.floor(Math.random() * colors.length)];
	}, []);

	return (
		<Box className={`${styles.listRow} ${isCompleted ? styles.completed : ''}`} style={{ backgroundColor }}>
			<Box className={styles.content}>
				<IconButton aria-label="Drag Handle">
					<DragIndicator />
				</IconButton>
				<Controller
					control={control}
					name="isCompleted"
					render={({ field }) => (
						<Checkbox onChange={field.onChange} checked={field.value} />
					)}
				/>
				<TransparentField {...register('name')} />
			</Box>
			<Box className={styles.date}>
				<Controller
					control={control}
					name="createdAt"
					render={({ field }) => (
						<DatePicker onChange={field.onChange} value={field.value || ''} />
					)}
				/>
			</Box>
			<Box className={styles.capitalize}>
				<Controller
					control={control}
					name="priority"
					render={({ field }) => (
						<SingleSelect
							data={['high', 'medium', 'low'].map(option => ({
								value: option,
								label: option,
							}))}
							onChange={field.onChange}
							value={field.value || ''}
						/>
					)}
				/>
			</Box>
			<Box className={styles.deleteButton}>
				<IconButton onClick={() => item.id ? deleteTask(item.id) : setItems(prev => prev?.slice(0, -1))}>
					{isDeletePending ? <CircularProgress size={15} /> : <Delete />}
				</IconButton>
			</Box>
		</Box>
	);
}
