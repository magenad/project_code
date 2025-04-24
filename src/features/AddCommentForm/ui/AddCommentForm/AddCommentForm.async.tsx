import { FC, lazy } from 'react';

import AddCommentForm, { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = _PROJECT__==='storybook' ? AddCommentForm :  lazy<FC<AddCommentFormProps>>(
    () =>
        new Promise((resolve) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setTimeout(() => resolve(import('./AddCommentForm')), 1500);
        })
);
