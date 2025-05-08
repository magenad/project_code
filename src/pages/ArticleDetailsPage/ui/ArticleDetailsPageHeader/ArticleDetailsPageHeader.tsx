import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPageHeader.module.scss';
import { memo, useCallback } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailData } from 'entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const userData = useSelector(getUserAuthData);
    const article =useSelector(getArticleDetailData);
    const canEdit = useSelector(getCanEditArticle);
    const onBackToList = useCallback(()=>{
        navigate(RoutePath.articles);
    },[navigate]);
    const onEditArticle = useCallback(()=>{
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    },[article?.id, navigate]);
    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>

            <Button theme={ThemeButton.OUTLINED} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {canEdit && <Button theme={ThemeButton.OUTLINED} onClick={onEditArticle} className={cls.editBtn}>
                {t('Редактировать')}
            </Button>}
        </div>
    );
});
