import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/provider/StoreProvider';
import { Article } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';

export const fetchArticleRecommendations = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>('articleDetailsPage/fetchArticlesRecommendations', async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
        addQueryParams({});
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _limit: 4,
            },
        });
        if (!response.data) throw new Error();
        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
