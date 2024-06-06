import React from 'react';
import { Button, Box } from '@mui/material';
import { type Dispatch, type SetStateAction } from 'react';
import { ITaskResponse } from '@/types/task.types';
import { COLORS } from '@/constants/color.constants'

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
		<Box mt={2} display="flex" justifyContent="left">
			<Button
				onClick={addRow}
				variant="text"
				sx={{ fontStyle: 'italic', opacity: 0.4, fontSize: '0.875rem', color: COLORS.tuapeGrayDark }}
			>
				Add task...
			</Button>
		</Box>
	);
}
