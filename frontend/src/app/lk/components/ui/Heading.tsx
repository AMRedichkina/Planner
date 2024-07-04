import Typography from '@mui/material/Typography'

interface IHeading {
	title: string
}

export function Heading({ title }: IHeading) {
	return (
		<Typography variant="h4" component="h1" gutterBottom>
			{title}
		</Typography>
	)
}
