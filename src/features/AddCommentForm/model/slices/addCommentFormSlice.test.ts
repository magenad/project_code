import { LoginSchema } from '@/features/AuthByUsername';
import { addCommentFormReducer,addCommentFormActions } from './addCommentFormSlice';
import { AddCommentFormSchema } from '../types/addCommentForm';

describe('addCommentFormSlice.test', () => {
    test('test set text', () => {
        const state: DeepPartial<AddCommentFormSchema> = {};
        expect(
            addCommentFormReducer(
                state as LoginSchema,
                addCommentFormActions.setText('123123')
            )
        ).toEqual({ text: '123123' });
    });
});
