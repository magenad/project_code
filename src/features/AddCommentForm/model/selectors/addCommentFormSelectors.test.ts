import { StateSchema } from 'app/provider/StoreProvider';
import { getAddCommentFormError, getAddCommentFormText } from './addCommentFormSelectors';

describe('addCommentFormSelectors.test', () => {
    test('should return value FormText', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: '123123'
            }
        };

        expect(getAddCommentFormText(state as StateSchema)).toEqual('123123');
    });
    test('should work with empty status FormText', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getAddCommentFormText(state as StateSchema)).toBeUndefined();
    });
    test('should return value FormError', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error'
            }
        };

        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty status FormError', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getAddCommentFormError(state as StateSchema)).toBeUndefined();
    });
});