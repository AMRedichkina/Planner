'use client'

import ViewListIcon from '@mui/icons-material/ViewList';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';

import type { TypeView } from './TasksView'
import { Button, Typography } from '@mui/material';

interface ISwitcherView {
	type: TypeView
	setType: (value: TypeView) => void
}

export function SwitcherView({ setType, type }: ISwitcherView) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Button
        onClick={() => setType('list')}
        startIcon={<ViewListIcon />}
      />
      <Typography variant="subtitle1" color="textSecondary">/</Typography>
      <Button
        onClick={() => setType('kanban')}
        startIcon={<ViewKanbanIcon />}
      />
    </div>
  );
}
