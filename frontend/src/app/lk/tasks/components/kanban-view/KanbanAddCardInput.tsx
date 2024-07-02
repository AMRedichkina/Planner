import { type Dispatch, type SetStateAction } from 'react'

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


import type { ITaskResponse } from '@/types/task.types'

interface IKanbanAddCardInput {
	filterDate?: string
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function KanbanAddCardInput({
    setItems,
    filterDate
}: IKanbanAddCardInput) {
    const addCard = () => {
        setItems(prev => {
            if (!prev) return

            return [
                ...prev,
                {
                    id: '',
                    name: '',
                    isCompleted: false,
                    createdAt: filterDate
                }
            ]
        });
    }

    return (
        <Stack direction="row" spacing={2} sx={{ mt: 1, justifyContent: "left" }}>
            <Button
                variant="text"
                onClick={addCard}
                sx={{ fontStyle: 'italic', fontSize: '0.875rem' }}
            >
                Add task...
            </Button>
        </Stack>
    );
}
