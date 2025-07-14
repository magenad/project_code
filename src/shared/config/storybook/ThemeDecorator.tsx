import { Story } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line my/layer-imports
import { ThemeProvider } from '@/app/provider/ThemeProvider';
export const ThemeDecorator=(theme: Theme) => (StoryComponent:Story)=>(
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent/>
        </div>
    </ThemeProvider>

);