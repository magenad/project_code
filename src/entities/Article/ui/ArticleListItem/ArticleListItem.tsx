import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleListItem.module.scss';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { AppLink } from '@/shared/ui/AppLink';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation();

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text
                text={String(article.views)}
                className={cls.views}
                data-testid={'ArticleListItem.Views'}
            />
            <Icon Svg={EyeIcon} />
        </>
    );
    if (view === ArticleView.SMALL) {
        return (
            <AppLink
                target={target}
                data-testid={'ArticleListItem'}
                to={getRouteArticleDetails(article.id)}
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card
                    className={cls.card}
                    data-testid={'ArticleListItem.Card'}
                >
                    <div className={cls.imageWrapper}>
                        <AppImage
                            fallback={<Skeleton width={200} height={200}/>}
                            src={article.img}
                            className={cls.img}
                            alt={article.title}
                        />
                        <Text text={article.createdAt} className={cls.data} />
                    </div>
                    <div
                        className={cls.infoWrapper}
                        data-testid={'ArticleListItem.Card.Info'}
                    >
                        {types}
                        {views}
                    </div>
                    <Text title={article.title} className={cls.title} />
                </Card>
            </AppLink>
        );
    }
    const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
    return (
        <div
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            data-testid={'ArticleListItem'}
        >
            <Card className={cls.card}>
                <div className={cls.header}>
                    <Avatar size={30} src={article.user.avatar} />
                    <Text text={article.user.username} className={cls.username} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <Text title={article.title} className={cls.title} />
                {types}
                {view}
                <AppImage
                    fallback={<Skeleton width="100%" height={250}/>}
                    src={article.img}
                    className={cls.img}
                    alt={article.title}
                />
                {textBlock && (
                    <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                )}
                <div className={cls.footer}>
                    <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                        <Button theme={ThemeButton.OUTLINED}>
                            {t('Читать далее')}
                        </Button>
                    </AppLink>

                </div>
            </Card>
        </div>
    );
});
