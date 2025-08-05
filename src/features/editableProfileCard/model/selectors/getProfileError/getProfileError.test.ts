import { StateSchema } from '@/app/provider/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: '123',
            },
        };

        expect(getProfileError(state as StateSchema)).toEqual('123');
    });
    test('should work with empty status', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
