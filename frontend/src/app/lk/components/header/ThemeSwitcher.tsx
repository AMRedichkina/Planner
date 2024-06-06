'use client'

import React, { useContext } from 'react';
// import { ThemeContext } from '../../../theme-provider'
import { useApplicationConfigs } from '@/contexts/ApplicationConfigsContext'
import { Switch, FormControlLabel } from '@mui/material';

const ThemeSwitcher = () => {
    // const { theme, changeContext } = useContext(ThemeContext)
    const { theme, changeTheme } = useApplicationConfigs();
    return (
        <FormControlLabel
            control={
                <Switch
                    checked={theme === 'dark'}
                    onChange={changeTheme}
                    name="themeSwitch"
                    color="primary"
                />
            }
            label={theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
        />
    );
};

export default ThemeSwitcher;
