'use client'

import React from 'react'
import { DragDropContext } from '@hello-pangea/dnd'
import { Box } from '@mui/material'

import { COLUMNS } from '../../dataFilters/columns.data'
import { useTaskDnd } from '../../hooks/useTaskDnd'
import { useTasks } from '../../hooks/useTasks'
import { KanbanColumn } from './KanbanColumn'
import './KanbanView.module.scss'

export const KanbanView = () => {
  const { items, setItems } = useTasks()
  const { onDragEnd } = useTaskDnd()

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box sx={{ display: 'flex', overflowX: 'auto' }}>
        {COLUMNS.map(column => (
          <KanbanColumn
            key={column.value}
            value={column.value}
            label={column.label}
            items={items}
            setItems={setItems}
          />
        ))}
      </Box>
    </DragDropContext>
  );
};

