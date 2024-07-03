'use client'


import { Button } from '@/components/ui/buttons/Button'

import { formatTime } from './format-time'
import { useCreateSession } from '../hooks/useCreateSession'
import { useDeleteSession } from '../hooks/useDeleteSession'
import { useTimer } from '../hooks/useTimer'
import { useTimerActions } from '../hooks/useTimerActions'
import { useTodaySession } from '../hooks/useTodaySession'
import { PomodoroRounds } from './rounds/PomodoroRounds'
import { Box, Typography } from '@mui/material'
import { Pause, PlayArrow as Play, RestartAlt } from '@mui/icons-material';

export function Pomodoro() {
	const timerState = useTimer()
	const { sessionsResponse, workInterval } =
		useTodaySession(timerState)

	const rounds = sessionsResponse?.data.rounds
	const actions = useTimerActions({ ...timerState, rounds })

	const { isPending, mutate } = useCreateSession()
	const { deleteSession, isDeletePending } = useDeleteSession(() =>
		timerState.setSecondsLeft(workInterval * 60)
	)

	return (
		<Box sx={{ mt:'2rem', width: '80%', textAlign: 'center', position: 'relative' }}>
		<Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
			{formatTime(timerState.secondsLeft)}
		</Typography>
		{sessionsResponse?.data ? (
			<>
				<PomodoroRounds
					rounds={rounds}
					nextRoundHandler={actions.nextRoundHandler}
					prevRoundHandler={actions.prevRoundHandler}
					activeRound={timerState.activeRound}
				/>
				<Button
					variant="contained"
					onClick={
						timerState.isRunning ? actions.pauseHandler : actions.playHandler
					}
					disabled={actions.isUpdateRoundPending}
					sx={{ mt: 2, opacity: 0.8, '&:hover': { opacity: 1 } }}
					startIcon={timerState.isRunning ? <Pause /> : <Play />}
				/>
				<Button
					variant="contained"
					onClick={() => {
						timerState.setIsRunning(false);
						deleteSession(sessionsResponse.data.id);
					}}
					sx={{ position: 'absolute', top: 0, right: 0, opacity: 0.8, '&:hover': { opacity: 0.9 } }}
					disabled={isDeletePending}
					startIcon={<RestartAlt />}
				/>
			</>
		) : (
			<Button
				onClick={() => mutate()}
				variant="contained"
				sx={{ mt: 1 }}
				disabled={isPending}
			>
				Create session
			</Button>
		)}
	</Box>
);
}
