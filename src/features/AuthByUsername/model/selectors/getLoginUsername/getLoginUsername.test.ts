import { StateSchema } from '@/app/provider/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'User01',
            },
        };

        expect(getLoginUsername(state as StateSchema)).toEqual('User01');
    });
    test('should work with empty status', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
