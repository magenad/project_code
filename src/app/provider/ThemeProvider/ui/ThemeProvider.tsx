import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';
import { ReactNode, useMemo, useState } from 'react';
import { Theme } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const { initialTheme, children } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
    document.body.className = theme;
    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme]);
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );

};
export default ThemeProvider;