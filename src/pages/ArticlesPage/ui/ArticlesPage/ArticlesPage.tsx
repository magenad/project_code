import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';
import { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilter } from '../ArticlesPageFilter/ArticlesPageFilter';
import { useSearchParams } from 'react-router-dom';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { useSelector } from 'react-redux';
import { getArticlesPageIsLoading } from '../../model/selectors/articlesPageSelectors';

interface ArticlesPageProps {
    className?: string;
}


const reducers: ReducersList = {
    articlesPage: articlesPageReducer
};
const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    let [searchParams] = useSearchParams();

    const isLoading = useSelector(getArticlesPageIsLoading);
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);
    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));

    });
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
                isLoading={isLoading}
                data-testid={'ArticlesPage'}
            >
                <ArticlesPageFilter />
                <ArticleInfiniteList className={cls.list}/>

            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);
