import React from 'react';
import { Button, Box } from '@mui/material';
import { type Dispatch, type SetStateAction } from 'react';
import { ITaskResponse } from '@/types/task.types';

interface IListAddRowInput {
	filterDate?: string;
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
}

export function ListAddRowInput({ setItems, filterDate }: IListAddRowInput) {
	const addRow = () => {
		setItems((prev) => {
			if (!prev) return;

			return [
				...prev,
				{
					id: '',
					name: '',
					isCompleted: false,
					createdAt: filterDate,
				},
			];
		});
	};

	return (
		<Box mt={2} display="flex" justifyContent="center">
			<Button
				onClick={addRow}
				variant="text"
				color="primary"
				sx={{ fontStyle: 'italic', opacity: 0.4, fontSize: '0.875rem' }}
			>
				Add task...
			</Button>
		</Box>
	);
}
