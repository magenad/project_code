import { Story } from '@storybook/react';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';
export interface MRDProps extends MemoryRouterProps {
    path: string;
}
export const MemoryRouterDecorator = (args: any) => (StoryComponent: Story) => {
    const { path } = args;
    return (
        <MemoryRouter initialEntries={[path]}>
            <StoryComponent />
        </MemoryRouter>
    );
};
