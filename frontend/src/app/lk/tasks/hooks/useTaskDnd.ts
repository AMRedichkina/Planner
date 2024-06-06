import { DropResult } from '@hello-pangea/dnd'

import { FILTERS } from '../dataFilters/columns.data'

import { useUpdateTask } from './useUpdateTask'
import { useCallback } from 'react'

export function useTaskDnd() {
	const { updateTask } = useUpdateTask()

	const onDragEnd = useCallback((result: DropResult) => {
		if (!result.destination) return

		const { destination, source, draggableId } = result

		if (destination.droppableId === source.droppableId && destination.index === source.index) {
			return
		}

		if (destination.droppableId === 'completed') {
			updateTask({
				id: draggableId,
				data: {
					isCompleted: true
				}
			})
		} else {
			const newCreatedAt = FILTERS[destination.droppableId]?.format();
			updateTask({
				id: draggableId,
				data: {
					createdAt: newCreatedAt,
					isCompleted: false
				}
			})
			console.log('updated draggableID')
		}
	}, [updateTask])

	return { onDragEnd }
}
