import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { UserRole } from '@/entities/User';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ paddingLeft: '200px', position: 'absolute' }}>
                <Story />
            </div>
        ),
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'user',
                    roles: [UserRole.ADMIN],
                },
            },
        }),
    ],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <AvatarDropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = { opened: true };
