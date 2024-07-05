import React from 'react';
import { type Dispatch, type SetStateAction } from 'react';
import { Controller, useForm } from 'react-hook-form';
import type { ITaskResponse, TypeTaskFormState } from '@/types/task.types';
import { Card, CardContent, Checkbox, FormControlLabel, IconButton, TextField } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import dayjs from 'dayjs';
import { useTheme } from '@mui/material/styles';
import { useDeleteTask } from '../../hooks/useDeleteTask';
import { useTaskDebounce } from '../../hooks/useTaskDebounce';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

interface IKanbanCard {
  item: ITaskResponse;
  setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
}

const priorityStyles = {
  high: {
    color: 'red',
  },
  medium: {
    color: 'orange',
  },
  low: {
    color: 'green',
  },
};

const priorityIcons: { [key: string]: JSX.Element } = {
  high: <PriorityHighIcon style={priorityStyles.high} />,
  medium: <ArrowUpwardIcon style={priorityStyles.medium} />,
  low: <ArrowDownwardIcon style={priorityStyles.low} />,
};

const priorityCycle: Array<'low' | 'medium' | 'high'> = ['low', 'medium', 'high'];

export const KanbanCard = ({ item, setItems }: IKanbanCard) => {
  const theme = useTheme();

  const { register, control, watch, getValues, setValue } = useForm<TypeTaskFormState>({
    defaultValues: {
      name: item.name || 'Task name',
      isCompleted: item.isCompleted,
      createdAt: item.createdAt,
      priority: item.priority || 'low'
    }
  });

  useTaskDebounce({ watch, itemId: item.id });
  const { deleteTask, isDeletePending } = useDeleteTask();

  const changePriority = () => {
    const currentPriority = getValues('priority') || 'low'; // Default to 'low' if undefined
    const nextPriorityIndex = (priorityCycle.indexOf(currentPriority as 'low' | 'medium' | 'high') + 1) % priorityCycle.length;
    const nextPriority = priorityCycle[nextPriorityIndex];
    setValue('priority', nextPriority);
  };
  

  return (
    <Card variant="outlined" sx={{ maxWidth: 300, margin: '8px', boxShadow: 3, overflow: 'hidden' }}>
      <CardContent sx={{ padding: '8px', '& > div:not(:last-child)': { mb: 0.5 } }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <IconButton aria-label="drag" disabled>
            <DragIndicatorIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => item.id ? deleteTask(item.id) : setItems(prev => prev?.slice(0, -1))}              
            sx={{ marginLeft: 'auto' }}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </div>
        <TextField
          {...register('name')}
          variant="outlined"
          fullWidth
          size="small"
          label="Task Name"
          InputLabelProps={{
            shrink: false,
            style: { position: 'absolute', clip: 'rect(0 0 0 0)', clipPath: 'inset(50%)' }
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'transparent',
              },
              '&:hover fieldset': {
                borderColor: 'transparent',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'primary.main', 
              },
            },
          }}
        />
        <Controller
          control={control}
          name="createdAt"
          render={({ field: { onChange, value } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                format="MMMM D, YYYY"
                value={value ? dayjs(value) : null}
                onChange={(newValue) => {
                  const isoDate = newValue ? dayjs(newValue).toISOString() : null;
                  onChange(isoDate);
                }}
                slotProps={{
                  textField: {
                    variant: "standard",
                    InputProps: { disableUnderline: true },
                    fullWidth: true,
                    inputProps: {
                      style: { marginLeft: '1rem', display: 'block' }
                    }
                  }
                }}
              />
            </LocalizationProvider>
          )}
        />
        <IconButton onClick={changePriority}>
          {priorityIcons[getValues('priority') || 'low']}
        </IconButton>
        <Controller
          control={control}
          name='isCompleted'
          render={({ field: { value, onChange } }) => (
            <FormControlLabel
              control={
                <Checkbox
                  onChange={onChange}
                  checked={value || false}
                />
              }
              label=""
            />
          )}
        />
      </CardContent>
    </Card>
  );
};
