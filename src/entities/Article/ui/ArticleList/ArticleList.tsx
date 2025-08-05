import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleList.module.scss';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text } from '@/shared/ui/Text';
import { ArticleView } from '../../model/consts/consts';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));
export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props;
    const { t } = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls[view], {}, [className])}>
                <Text title={t('Статьи не найдены')} />
            </div>
        );
    }
    return (
        <div
            className={classNames(cls[view], {}, [className])}
            data-testid={'ArticleList'}
        >
            {articles.map((item) => (
                <ArticleListItem
                    article={item}
                    view={view}
                    target={target}
                    key={item.id}
                    className={cls.card}
                    data-testid={'ArticleListItem'}
                />
            ))}

            {isLoading && getSkeletons(view)}
        </div>
    );
});
