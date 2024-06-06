'use client';

import React from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Heading } from '@/components';

export default function StatisticsPage() {
	const { data } = useAnalytics();

	return (
		<>
			<Heading title='Statistics' />
			<Grid container spacing={2} style={{ padding: 16 }}>
				{data?.analytics.length ? (
					data.analytics.map((statistic) => (
						<Grid item xs={12} sm={3} md={3} key={statistic.label}>
							<Card>
								<CardContent>
									<Typography variant="h6" component="h2">
										{statistic.label}
									</Typography>
									<Typography variant="body1">
										{statistic.value}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))
				) : (
					<div>No analytics data available.</div>
				)}
			</Grid>
		</>

	);
}
