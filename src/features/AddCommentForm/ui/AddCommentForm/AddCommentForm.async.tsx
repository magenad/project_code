import { FC, lazy } from 'react';

import AddCommentForm, { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = _PROJECT__==='storybook' ? AddCommentForm :  lazy<FC<AddCommentFormProps>>(
    () => import('./AddCommentForm'));
