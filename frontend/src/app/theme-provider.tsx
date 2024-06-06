'use client'

import { ApplicationConfigs } from '@/contexts/ApplicationConfigsContext'

import { CssBaseline } from '@mui/material';


export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode
}) {
    return <ApplicationConfigs><CssBaseline />{children}</ApplicationConfigs>
}