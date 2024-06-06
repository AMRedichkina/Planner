import ThemeSwitcher from './ThemeSwitcher';
import { Profile } from './profile/Profile'

type HeaderProps = {
	className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className }) => {
	return (
		<header>
			<ThemeSwitcher />
			<Profile />
		</header>
	)
}
