import cn from 'clsx'

import { IPomodoroRoundResponse } from '@/types/pomodoro.types'

import styles from './PomodoroRounds.module.scss'
import { Box, IconButton } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

interface IPomodoroRounds {
	rounds: IPomodoroRoundResponse[] | undefined
	nextRoundHandler: () => void
	prevRoundHandler: () => void
	activeRound: IPomodoroRoundResponse | undefined
}

export function PomodoroRounds({
	rounds,
	nextRoundHandler,
	prevRoundHandler,
	activeRound
}: IPomodoroRounds) {
	const isCanPrevRound = rounds
		? rounds.some(round => round.isCompleted)
		: false
	const isCanNextRound = rounds ? !rounds[rounds.length - 1].isCompleted : false

	return (
		<Box className={styles.container} sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
                color="primary"
                onClick={() => (isCanPrevRound ? prevRoundHandler() : null)}
                disabled={!isCanPrevRound}
                sx={{ padding: '10px' }}
            >
                <ChevronLeft fontSize="large" />
            </IconButton>
            <Box className={styles.roundsContainer} sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                {rounds &&
                    rounds.map((round, index) => (
						<div
							key={index}
							className={cn(styles.round, {
								[styles.completed]: round.isCompleted,
								[styles.active]:
									round.id === activeRound?.id && !round.isCompleted
							})}
						/>
                    ))}
            </Box>
            <IconButton
                color="primary"
                onClick={() => (isCanNextRound ? nextRoundHandler() : null)}
                disabled={!isCanNextRound}
                sx={{ padding: '10px' }}
            >
                <ChevronRight fontSize="large" />
            </IconButton>
        </Box>
    );
}
