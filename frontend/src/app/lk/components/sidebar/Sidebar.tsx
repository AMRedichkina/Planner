import { Box } from '@mui/material'
import { MenuItem } from './Menu/MenuItem'
import { MENU } from './Menu/menu.data'


type SidebarProps = {
	className?: string;
};

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
	return (
		<div className={className}>
			<Box px={3} py={2} width={100} position='relative'>
				{MENU.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
			</Box>
		</div>
	)
}
