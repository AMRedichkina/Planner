'use client';

import React from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import { Box, Grid, Typography } from '@mui/material';
import { COLUMNS } from '../columns.data';
import { useTaskDnd } from '../hooks/useTaskDnd';
import { useTasks } from '../hooks/useTasks';
import { ListRowParent } from './ListRowParent';

export function ListView() {
	const { items, setItems } = useTasks();
	const { onDragEnd } = useTaskDnd();

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Box>
				<Box display="flex" justifyContent="space-between" p={2} bgcolor="grey.200">
					<Typography variant="h6">Task name</Typography>
					<Typography variant="h6">Due date</Typography>
					<Typography variant="h6">Priority</Typography>
					<Typography variant="h6"></Typography>
				</Box>
				<Box mt={2}>
					{COLUMNS.map((column) => (
						<ListRowParent
							items={items}
							label={column.label}
							value={column.value}
							setItems={setItems}
							key={column.value}
						/>
					))}
				</Box>
			</Box>
		</DragDropContext>
	);
}
