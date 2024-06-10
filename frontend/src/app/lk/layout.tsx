import React from 'react';
import type { ReactNode } from 'react';
import styles from './layout.module.scss';

import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Footer } from './components/footer/Footer';


export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<main className={styles.dashboard}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={`${styles.main} ${styles.title}`}>{children}</div>
			<Footer className={styles.footer} />
		</main>
	);
}
