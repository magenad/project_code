import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator =
    // eslint-disable-next-line react/display-name
    (state: DeepPartial<StateSchema>) => (StoryComponent: Story) =>
        (
            <StoreProvider initialState={state}>
                <StoryComponent />
            </StoreProvider>
        );
