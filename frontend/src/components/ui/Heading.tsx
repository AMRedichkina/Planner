import Typography from '@mui/material/Typography'
import { COLORS } from '@/constants/color.constants'

interface IHeading {
	title: string
}

export function Heading({ title }: IHeading) {
	return (
		<Typography variant="h4" component="h1" gutterBottom sx={{ color: COLORS.tuapeGrayDark }}>
			{title}
		</Typography>
	)
}
