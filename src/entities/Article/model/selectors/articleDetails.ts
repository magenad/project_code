import { StateSchema } from '@/app/provider/StoreProvider';

export const getArticleDetailData = (state: StateSchema)=> state.articleDetails?.data;
export const getArticleDetailIsLoading = (state: StateSchema)=> state.articleDetails?.isLoading || false;
export const getArticleDetailError = (state: StateSchema)=> state.articleDetails?.error;