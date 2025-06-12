import 'whatwg-fetch';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');
const params = new URLSearchParams();
describe('initArticlesPage.test', () => {

    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {});

        await thunk.callThunk(params);
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalled();
    });
    test('fetchArticlesList not called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited:true
            }
        });

        await thunk.callThunk(params);
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});