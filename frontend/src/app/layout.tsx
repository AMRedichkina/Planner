import type { Metadata } from 'next'
import { Noto_Serif } from 'next/font/google'
import { Toaster } from 'sonner'

import { SITE_NAME } from '@/constants/seo.constants'

import './globals.scss'
import { Providers } from './providers'
import ThemeProvider from './theme-provider'


const zen = Noto_Serif({
	subsets: ['latin'],
	weight: ['400', '700'],
	display: 'swap',
	variable: '--font-zen',
	style: ['normal'],
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Best one for planning from RED GROUP [htmllessons.ru]'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={zen.className}>
				<Providers>
					<ThemeProvider>{children}</ThemeProvider>
					<Toaster
						theme='light'
						position='bottom-right'
						duration={1500}
					/>
				</Providers>
			</body>
		</html>
	)
}
