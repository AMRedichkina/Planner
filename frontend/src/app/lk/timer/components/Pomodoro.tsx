'use client'

import { formatTime } from './format-time'
import { useCreateSession } from '../hooks/useCreateSession'
import { useDeleteSession } from '../hooks/useDeleteSession'
import { useTimer } from '../hooks/useTimer'
import { useTimerActions } from '../hooks/useTimerActions'
import { useTodaySession } from '../hooks/useTodaySession'
import { PomodoroRounds } from './rounds/PomodoroRounds'
import { Box, Button, IconButton, Typography } from '@mui/material'
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
        <Box sx={{ mt: '2rem', width: '90%', textAlign: 'center', position: 'relative' }}>
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
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
                        <IconButton
                            color="primary"
                            onClick={
                                timerState.isRunning ? actions.pauseHandler : actions.playHandler
                            }
                            disabled={actions.isUpdateRoundPending}
                            sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}
                        >
                            {timerState.isRunning ? <Pause /> : <Play />}
                        </IconButton>
                        <IconButton
                            color="primary"
                            onClick={() => {
                                timerState.setIsRunning(false);
                                deleteSession(sessionsResponse.data.id);
                            }}
                            disabled={isDeletePending}
                            sx={{ opacity: 0.8, '&:hover': { opacity: 0.9 } }}
                        >
                            <RestartAlt />
                        </IconButton>
                    </Box>
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