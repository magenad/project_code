import { StateSchema } from '@/app/provider/StoreProvider';
import { getProfileData } from './getProfileData';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

describe('getProfileData.test', () => {
    test('should work with filled state', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            first: 'Ivan',
            lastname: 'Ivanov',
            currency: Currency.RUB,
            city: 'Moscow',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };

        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty status', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
