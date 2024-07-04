import type { Metadata } from 'next'

import { Heading } from '@/app/lk/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Settings } from './Settings/Settings'
import { UserSettings } from './userSettings/UserSettings'

export const metadata: Metadata = {
	title: 'Settings',
	...NO_INDEX_PAGE
}

export default function SettingsPage() {
	return (
		<>
			<Heading title='Settings' />
			<UserSettings />
			<Settings />
		</>
	)
}
