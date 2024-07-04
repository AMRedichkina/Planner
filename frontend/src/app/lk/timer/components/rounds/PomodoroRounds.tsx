import { Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface IPomodoroRoundResponse {
    id: string;
    isCompleted: boolean;
}

interface IPomodoroRounds {
    rounds: IPomodoroRoundResponse[] | undefined;
    nextRoundHandler: () => void;
    prevRoundHandler: () => void;
    activeRound: IPomodoroRoundResponse | undefined;
}

export function PomodoroRounds({
    rounds,
    nextRoundHandler,
    prevRoundHandler,
    activeRound
}: IPomodoroRounds) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const isCanPrevRound = rounds ? rounds.some(round => round.isCompleted) : false;
    const isCanNextRound = rounds ? !rounds[rounds.length - 1].isCompleted : false;

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px', // Gap for desktop
            p: isMobile ? 1 : 2, // Smaller padding on mobile
        }}>
            <IconButton
                color="primary"
                onClick={() => (isCanPrevRound ? prevRoundHandler() : null)}
                disabled={!isCanPrevRound}
                sx={{
                    padding: isMobile ? '6px' : '10px', // Smaller padding on mobile
                    fontSize: isMobile ? 'small' : 'large', // Adjust icon size based on screen size
                }}
            >
                <ChevronLeft fontSize={isMobile ? 'inherit' : 'large'} />
            </IconButton>
            <Box sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: isMobile ? '6px' : '12px', // Smaller gaps on mobile
                marginTop: '4px',
            }}>
                {rounds && rounds.map((round, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: isMobile ? 16 : 20, // Smaller indicators on mobile
                            height: isMobile ? 16 : 20, // Smaller indicators on mobile
                            borderRadius: '50%',
                            border: '1px solid',
                            borderColor: 'borderColor',
                            position: 'relative',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: round.isCompleted ? '100%' : round.id === activeRound?.id ? '40%' : '0%',
                                height: '100%',
                                backgroundColor: 'primary.main',
                                borderRadius: '50%',
                                transition: 'width 1s ease'
                            }
                        }}
                    />
                ))}
            </Box>
            <IconButton
                color="primary"
                onClick={() => (isCanNextRound ? nextRoundHandler() : null)}
                disabled={!isCanNextRound}
                sx={{
                    padding: isMobile ? '6px' : '10px', // Smaller padding on mobile
                    fontSize: isMobile ? 'small' : 'large', // Adjust icon size based on screen size
                }}
            >
                <ChevronRight fontSize={isMobile ? 'inherit' : 'large'} />
            </IconButton>
        </Box>
    );
}
