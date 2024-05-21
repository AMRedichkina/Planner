import { Box } from '@mui/material'
import { LogoutButton } from './LogoutButton'
import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'


type SidebarProps = {
	className?: string;
};

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
	return (
		<div className={className}>
			<Box px={3} py={2} position='relative'>
				<LogoutButton />
				{MENU.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
			</Box>
		</div>
	)
}
