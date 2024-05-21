import React from 'react';
import type { PropsWithChildren } from 'react';
import styles from './DashboardLayout.module.css';

import { Header } from './header/Header';
import { Sidebar } from './sidebar/Sidebar';
import { Logo } from './Logo';
import { Footer } from './Footer';

export default function DashboardLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<main className={styles.dashboard}>
			<Logo className={styles.logo} />
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.main}>{children}</div>
			<Footer className={styles.footer} />
		</main>
	);
}
