import { StateSchema } from '@/app/provider/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

describe('getProfileForm.test', () => {
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
                form: data,
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty status', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
