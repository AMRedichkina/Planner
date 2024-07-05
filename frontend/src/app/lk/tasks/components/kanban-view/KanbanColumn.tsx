'use client'

import React from 'react'
import { Draggable, Droppable } from '@hello-pangea/dnd'
import type { Dispatch, SetStateAction } from 'react'

import type { ITaskResponse } from '@/types/task.types'

import { FILTERS } from '../../dataFilters/columns.data'
import { filterTasks } from '../../dataFilters/filter-tasks'

import { KanbanAddCardInput } from './KanbanAddCardInput'
import { KanbanCard } from './KanbanCard'

import { Typography } from '@mui/material';

import styles from './KanbanView.module.scss'


interface IKanbanColumn {
	value: string
	label: string
	items: ITaskResponse[] | undefined
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export const KanbanColumn = ({ value, items, label, setItems }: IKanbanColumn) => {
	const filteredItems = filterTasks(items, value);
    const itemCount = filteredItems?.length ?? 0;

	return (
		<Droppable droppableId={value}>
			{provided => (
				<div
				ref={provided.innerRef}
				{...provided.droppableProps}
			  >
					<div className={styles.column}>
						<Typography variant="h6">{`${label} ${itemCount}`}</Typography>
						

						{filteredItems?.map((item, index) => (
							<Draggable key={item.id || `temp-${index}`} draggableId={item.id || `temp-${index}`} index={index}>
								{provided => (
									<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
										<KanbanCard key={item.id} item={item} setItems={setItems} />
									</div>
								)}
							</Draggable>
						))}

						{provided.placeholder}

						{value !== 'completed' && !items?.some(item => !item.id) && (
							<KanbanAddCardInput
								setItems={setItems}
								filterDate={
									FILTERS[value] ? FILTERS[value].format() : undefined
								}
							/>
						)}
					</div>
				</div>
			)}
		</Droppable>
	)
}
