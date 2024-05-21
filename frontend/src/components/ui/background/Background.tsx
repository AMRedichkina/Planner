import Box from '@mui/material/Box'
import Image from 'next/image'
import styles from './Background.module.scss'
import BackgroundSVG from '../../../../public/Group_bg.svg'

export function Background() {
    return (
        <Box
            position="absolute"
            top='1rem'
            left={0}
            width="100vw"
            height="95vh"
            zIndex={-1}
        >
            <Image
                src={BackgroundSVG}
                alt="Background"
                priority={true}
                className={styles.backgroundImage}
            />
        </Box>
    )
}