import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';


import { ValidateProfileError } from '../../consts/consts';

const data = {
    id:'1',
    username: 'admin',
    age: 22,
    country: Country.Russia,
    first: 'Ivan',
    lastname: 'Ivanov',
    currency: Currency.RUB,
    city: 'Moscow'
};
describe('updateProfileData.test', () => {

    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData,{
            profile: {
                form:data
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: data }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData,{
            profile: {
                form:data
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData,{
            profile: {
                form:{ ...data,lastname:'' }
            }
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
});
