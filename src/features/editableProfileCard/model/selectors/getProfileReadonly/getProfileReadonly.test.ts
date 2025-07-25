import { StateSchema } from '@/app/provider/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
    test('should work with filled state', () => {

        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly:true
            },
        };

        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });
    test('should work with empty status', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
