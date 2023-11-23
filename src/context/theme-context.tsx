import { createContext, useState, ReactNode } from 'react';

import { darkTheme, lightTheme } from '../themes/colors';

export interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
    getThemeColors: () => ThemeColors;
}

export interface ThemeColors {
    [key: string]: string;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const storedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState<string>(storedTheme || 'dark')

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    const getThemeColors = () => {
        return theme === 'dark' ? lightTheme : darkTheme;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, getThemeColors }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext };