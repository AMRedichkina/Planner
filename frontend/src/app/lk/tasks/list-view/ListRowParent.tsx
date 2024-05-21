import React from 'react';
import type { Dispatch, SetStateAction } from 'react'
import { Draggable, Droppable } from '@hello-pangea/dnd';
import { Box, Paper, Typography } from '@mui/material';
import { ITaskResponse } from '@/types/task.types';
import { FILTERS } from '../columns.data'
import { filterTasks } from '../filter-tasks';
import { ListAddRowInput } from './ListAddRowInput';
import { ListRow } from './ListRow';

interface IListRowParent {
	value: string;
	label: string;
	items: ITaskResponse[] | undefined;
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
}

export function ListRowParent({ value, items, label, setItems }: IListRowParent) {
	return (
		<Droppable droppableId={value}>
			{(provided) => (
				<Box ref={provided.innerRef} {...provided.droppableProps} mb={2}>
					<Paper elevation={3} sx={{ p: 2 }}>
						<Typography variant="h6" gutterBottom>{label}</Typography>

						{filterTasks(items, value)?.map((item, index) => (
							<Draggable key={item.id || `temp-${index}`} draggableId={item.id || `temp-${index}`} index={index}>
								{(provided) => (
									<Box
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										mb={1}
									>
										<ListRow key={item.id} item={item} setItems={setItems} />
									</Box>
								)}
							</Draggable>
						))}

						{provided.placeholder}
						{value !== 'completed' && !items?.some((item) => !item.id) && (
							<ListAddRowInput
								setItems={setItems}
								filterDate={FILTERS[value] ? FILTERS[value].format() : undefined}
							/>
						)}
					</Paper>
				</Box>
			)}
		</Droppable>
	);
}
