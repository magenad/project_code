import { StateSchema } from '@/app/provider/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('should work with filled state', () => {

        const state: DeepPartial<StateSchema> = {
            profile:{
                isLoading:true
            }
        };

        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty status', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
