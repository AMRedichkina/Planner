'use client'

import React, { createContext, useContext, useCallback, ReactNode } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '@/styles/theme';

export type Theme = 'light' | 'dark';

export interface ApplicationConfigsProps {
    children: ReactNode;
}

export interface ApplicationConfigsContextInterface {
    changeTheme: () => void;
    theme: Theme;
}

export const THEME = {
    LIGHT: 'light' as Theme,
    DARK: 'dark' as Theme,
};

export const defaultApplicationConfigsContext: ApplicationConfigsContextInterface = {
    theme: THEME.LIGHT,
    changeTheme: () => { },
};

export const ApplicationConfigsContext = createContext<ApplicationConfigsContextInterface>(defaultApplicationConfigsContext);

const useApplicationConfigs = () => useContext(ApplicationConfigsContext);

const ApplicationConfigs = ({ children }: ApplicationConfigsProps) => {
    const defaultConfig = {
        theme: THEME.LIGHT,
    };
    const [config, setConfig] = useLocalStorage<{ theme: Theme }>({
        key: 'config',
        defaultValue: defaultConfig,
    });

    const changeTheme = useCallback(() => {
        const newTheme = config.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
        setConfig({ ...config, theme: newTheme });
    }, [config, setConfig]);

    const currentTheme = config.theme === THEME.LIGHT ? lightTheme : darkTheme;

    return (
        <ApplicationConfigsContext.Provider
            value={{
                theme: config.theme,
                changeTheme,
            }}
        >
            <ThemeProvider theme={currentTheme}>
                {children}
            </ThemeProvider>
        </ApplicationConfigsContext.Provider>
    );
};

export { ApplicationConfigs, useApplicationConfigs };
