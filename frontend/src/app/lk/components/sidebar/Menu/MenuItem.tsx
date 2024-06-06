import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { IMenuItem } from './menu.interface';
import styles from './MenuItem.module.css';
import { COLORS } from '@/constants/color.constants';

export function MenuItem({ item }: { item: IMenuItem }) {
	const IconComponent = item.icon;
	return (
		<Box my={1}>
			<Link href={item.link} className={styles.menuItemLink}>
				<Box
					className={`${styles.menuItemBox} ${styles.menuItemBoxHover}`}
				>
					<IconComponent sx={{ color: COLORS.tuapeGrayDark, fontSize: 28 }} />
					<Typography sx={{ color: COLORS.tuapeGrayDark, fontSize: '1.2rem' }}>{item.name}</Typography>
				</Box>
			</Link>
		</Box>
	);
}
