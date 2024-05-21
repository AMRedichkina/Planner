import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { IMenuItem } from './menu.interface';

export function MenuItem({ item }: { item: IMenuItem }) {
	const IconComponent = item.icon;
	return (
		<Box my={1}>
			<Link href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
				<Box
					display='flex'
					gap={2.5}
					alignItems='center'
					py={1.5}
					px={3}
					sx={{
						transition: 'background-color 0.3s',
						'&:hover': {
							backgroundColor: 'rgba(255, 255, 255, 0.1)',
						},
						borderRadius: '8px',
					}}
				>
					<IconComponent sx={{ color: '#333', fontSize: 28 }} />
					<Typography color='#333' fontSize='1.2rem'>{item.name}</Typography>
				</Box>
			</Link>
		</Box>
	);
}
