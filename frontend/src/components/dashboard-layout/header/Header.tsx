import { GlobalLoader } from './GlobalLoader'
import { Profile } from './profile/Profile'

type HeaderProps = {
	className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className }) => {
	return (
		<header>
			<GlobalLoader />
			<Profile />
		</header>
	)
}
