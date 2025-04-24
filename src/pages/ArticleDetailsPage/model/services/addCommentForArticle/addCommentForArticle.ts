import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { getArticleDetailData } from 'entities/Article';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';
import { Comment } from 'entities/Comment';


export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('addDetails/addCommentForArticle', async (text, thunkAPI) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkAPI;
    const userData = getUserAuthData(getState());
    const article = getArticleDetailData(getState());
    if (!userData || !text || !article) {
        return rejectWithValue('error');
    }
    try {
        const response = await extra.api.post<Comment>('/comments', {
            articleId:article.id,
            userId:userData.id,
            text
        });
        if (!response.data) {
            throw new Error();
        }
        dispatch(fetchCommentsByArticleId(article.id));
        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
