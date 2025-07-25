import { StateSchema } from '@/app/provider/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123123',
            },
        };

        expect(getLoginPassword(state as StateSchema)).toEqual('123123');
    });
    test('should work with empty status', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
