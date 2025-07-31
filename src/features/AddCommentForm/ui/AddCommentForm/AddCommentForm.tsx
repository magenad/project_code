import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './AddCommentForm.module.scss';
import { memo, useCallback } from 'react';
import { Input } from '@/shared/ui/Input';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { useSelector } from 'react-redux';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/Stack';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text:string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer
};

const AddCommentForm = memo(({ className,onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();
    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);
    const onSendHandler = useCallback(()=>{
        onSendComment(text||'');
        onCommentTextChange('');
    },[onCommentTextChange, onSendComment, text]);
    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack
                data-testid={'AddCommentForm'}
                justify='between'
                max
                className={classNames(cls.AddCommentForm, {}, [className])}>

                <Input
                    className={cls.input}
                    data-testid={'AddCommentForm.Input'}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button
                    theme={ThemeButton.OUTLINED}
                    data-testid={'AddCommentForm.Button'}
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>

    );
});
export default AddCommentForm;