'use client'

import React from 'react';
import { useApplicationConfigs } from '@/contexts/ApplicationConfigsContext'
import { Box, Switch} from '@mui/material'
import styles from './ThemeSwitcher.module.scss'
import { WbSunny, NightsStay } from '@mui/icons-material';


const ThemeSwitcher = () => {
    const { theme, changeTheme } = useApplicationConfigs();
    return (
        <Box className={styles.profileContainer}>
            <Switch
                    checked={theme === 'dark'}
                    onChange={changeTheme}
                    name="themeSwitch"
                    color="primary"
                    icon={<WbSunny />}
                    checkedIcon={<NightsStay />} 
                />
        </Box>
        
    );
};

export default ThemeSwitcher;
