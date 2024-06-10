import ThemeSwitcher from './components/themeSwitcher/ThemeSwitcher'
import { Profile } from './components/profile/Profile'
import { Box } from '@mui/material';

type HeaderProps = {
	className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className }) => {
	return (
			<Box className={`${className}`}>
				<Profile />
				<ThemeSwitcher />
			</Box>	
	)
}
