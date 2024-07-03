"use client"

import React from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import { Box, Typography } from '@mui/material';
import { COLUMNS } from '../../dataFilters/columns.data';
import { useTaskDnd } from '../../hooks/useTaskDnd';
import { useTasks } from '../../hooks/useTasks';
import { ListRowParent } from './ListRowParent';
import styles from './ListView.module.scss';

export function ListView() {
	const { items, setItems } = useTasks();
	const { onDragEnd } = useTaskDnd();

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Box className={styles.taskContainer}>
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
		</DragDropContext>
	);
}
