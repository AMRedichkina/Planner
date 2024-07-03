"use client"

import useMediaQuery from '@mui/material/useMediaQuery';
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { SwitcherView } from './SwitcherView'
import { KanbanView } from './kanban-view/KanbanView'
import { ListView } from './list-view/ListView'

export type TypeView = 'list' | 'kanban'

/**
 * Component to render task views with either a list or a kanban layout.
 * Automatically switches to kanban view on mobile devices.
 */
export function TasksView() {
    // This hook stores and retrieves the user's preferred view type from local storage.
    const [type, setType] = useLocalStorage<TypeView>({
        key: 'view-type',
        defaultValue: 'list'
    });
	
	// Determine the view type based on device type. Force kanban view on mobile devices.
    const isMobile = useMediaQuery('(max-width:768px)');
    const viewType = isMobile ? 'kanban' : type;

    return (
        <div>
            {!isMobile && (
                <SwitcherView
                    setType={setType}
                    type={type}
                />
            )}
            {viewType === 'list' ? <ListView /> : <KanbanView />}
        </div>
    )
}
