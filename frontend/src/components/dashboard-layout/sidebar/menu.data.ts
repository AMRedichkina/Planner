import {
	Dashboard as DashboardIcon,
	ViewKanban as TasksIcon,
	Timer as TimerIcon,
	CalendarToday as CalendarIcon,
	Settings as SettingsIcon
} from '@mui/icons-material';

import { DASHBOARD_PAGES } from '@/config/pages-url.config';

import type { IMenuItem } from './menu.interface';

export const MENU: IMenuItem[] = [
	{
		icon: DashboardIcon,
		link: DASHBOARD_PAGES.HOME,
		name: 'Dashboard'
	},
	{
		icon: TasksIcon,
		link: DASHBOARD_PAGES.TASKS,
		name: 'Tasks'
	},
	{
		icon: TimerIcon,
		link: DASHBOARD_PAGES.TIMER,
		name: 'Pomodoro'
	},
	{
		icon: CalendarIcon,
		link: DASHBOARD_PAGES.TIME_BLOCKING,
		name: 'Time blocking'
	},
	{
		icon: SettingsIcon,
		link: DASHBOARD_PAGES.SETTINGS,
		name: 'Settings'
	}
];
