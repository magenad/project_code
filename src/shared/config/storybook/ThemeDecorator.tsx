import { Story } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider';
// eslint-disable-next-line react/display-name
export const ThemeDecorator=(theme: Theme) => (StoryComponent:Story)=>(
    <div className={`app ${theme}`}>
        <StoryComponent/>
    </div>
);