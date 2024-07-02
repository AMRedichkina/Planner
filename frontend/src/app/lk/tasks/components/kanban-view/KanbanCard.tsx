'use client'

import React from 'react'
import { useEffect, type Dispatch, type SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'
import type { ITaskResponse, TypeTaskFormState } from '@/types/task.types'
import { Card, CardContent, Checkbox, FormControl, FormControlLabel, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import dayjs from 'dayjs';
import { useTheme } from '@mui/material/styles';
import { useDeleteTask } from '../../hooks/useDeleteTask'
import { useTaskDebounce } from '../../hooks/useTaskDebounce'

interface IKanbanCard {
	item: ITaskResponse
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export const KanbanCard = ({ item, setItems }: IKanbanCard) => {
  const theme = useTheme();

	useEffect(() => {
		console.log('KanbanCard re-rendered', item);
	}, [item]);

	const { register, control, watch } = useForm<TypeTaskFormState>({
		defaultValues: {
			name: item.name,
			isCompleted: item.isCompleted,
			createdAt: item.createdAt,
			priority: item.priority
		}
	})

	useTaskDebounce({ watch, itemId: item.id })

	const { deleteTask, isDeletePending } = useDeleteTask()

	return (
		<Card variant="outlined" sx={{ maxWidth: 300, margin: '8px', boxShadow: 3, overflow: 'hidden' }}>
      <CardContent sx={{ padding: '8px', '& > div:not(:last-child)': { mb: 1 } }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          <IconButton aria-label="drag" disabled>
            <DragIndicatorIcon />
          </IconButton>

          <IconButton
            aria-label="delete"
            onClick={() => item.id ? deleteTask(item.id) : setItems(prev => prev?.slice(0, -1))}              sx={{ marginLeft: 'auto' }}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </div>

      <TextField
        {...register('name')}
        variant="outlined"
        fullWidth
        label="Task Name"
        size="small"
        style={{ display: 'block' }} 
      />
			
      <Controller
				control={control}
				name='createdAt'
				render={({ field: { onChange, value, ...restField } }) => (
          <TextField
              {...restField}
              type="date"
              label="Due Date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              size="small"
              fullWidth
              style={{ display: 'block' }} 
              value={value ? dayjs(value).format('YYYY-MM-DD') : ''}
              onChange={(e) => {
                  const dateValue = e.target.value;
                  const isoDate = dateValue ? dayjs(dateValue).toISOString() : '';
                  onChange(isoDate);
              }}
            />
        )}
			/>  
      <Controller
        name="priority"
        control={control}
        render={({ field }) => (
          <FormControl variant="outlined" size="small" style={{ display: 'block' }} >
            <InputLabel >Priority</InputLabel>
              <Select
                labelId="priority-label"
                label="Priority"
                {...field}
                onChange={e => field.onChange(e.target.value)}
              >
                <MenuItem value="high" style={{ color: theme.palette.error.main }}>High</MenuItem>
                <MenuItem value="medium" style={{ color: theme.palette.warning.main }}>Medium</MenuItem>
                <MenuItem value="low" style={{ color: theme.palette.success.main }}>Low</MenuItem>
              </Select>
            </FormControl>
        )}
      />

      <Controller
				control={control}
				name='isCompleted'
				render={({ field: { value, onChange } }) => (
          <FormControlLabel control={
					  <Checkbox
						  onChange={onChange}
						  checked={value}
					  />
          } label="Completed" />
				)}
			/>
      </CardContent>
		</Card>
	)
}
