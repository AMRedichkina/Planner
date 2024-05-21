import React, { type Dispatch, type SetStateAction } from 'react';
import { Box, IconButton, CircularProgress } from '@mui/material';
import { DragIndicator, Delete } from '@mui/icons-material';
import { Controller, useForm } from 'react-hook-form';
import Checkbox from '@/components/ui/checkbox';
import { TransparentField } from '@/components/ui/fields/TransparentField';
import { SingleSelect } from '@/components/ui/task-edit/SingleSelect';
import { DatePicker } from '@/components/ui/task-edit/date-picker/DatePicker';
import { ITaskResponse, TypeTaskFormState } from '@/types/task.types';
import { useDeleteTask } from '../hooks/useDeleteTask';
import { useTaskDebounce } from '../hooks/useTaskDebounce';

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

	return (
		<Box display="flex" alignItems="center" p={2} mb={1} bgcolor={watch('isCompleted') ? 'grey.300' : 'white'}>
			<Box display="flex" alignItems="center" gap={2} flexGrow={1}>
				<IconButton aria-describedby="todo-item">
					<DragIndicator />
				</IconButton>
				<Controller
					control={control}
					name="isCompleted"
					render={({ field: { value, onChange } }) => (
						<Checkbox onChange={onChange} checked={value} />
					)}
				/>
				<TransparentField {...register('name')} />
			</Box>
			<Box>
				<Controller
					control={control}
					name="createdAt"
					render={({ field: { value, onChange } }) => (
						<DatePicker onChange={onChange} value={value || ''} />
					)}
				/>
			</Box>
			<Box className="capitalize">
				<Controller
					control={control}
					name="priority"
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={['high', 'medium', 'low'].map((item) => ({
								value: item,
								label: item,
							}))}
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>
			</Box>
			<Box>
				<IconButton onClick={() => (item.id ? deleteTask(item.id) : setItems((prev) => prev?.slice(0, -1)))}>
					{isDeletePending ? <CircularProgress size={15} /> : <Delete />}
				</IconButton>
			</Box>
		</Box>
	);
}
