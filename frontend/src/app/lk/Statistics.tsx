'use client';

import React from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';
import styles from './Statistics.module.css';

export function Statistics() {
	const { data, isLoading } = useAnalytics();

	return (
		<div className={styles.container}>
			{isLoading ? (
				<div className={styles.loading}>
					Loading...
				</div>
			) : (
				<div className={styles.grid}>
					{data?.analytics.length ? (
						data.analytics.map((statistic) => (
							<div className={styles.card} key={statistic.label}>
								<div className={styles.title}>{statistic.label}</div>
								<div className={styles.value}>{statistic.value}</div>
							</div>
						))
					) : (
						<div>No analytics data available.</div>
					)}
				</div>
			)}
		</div>
	);
}
