import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetailData } from '@/entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import { HStack } from '@/shared/ui/Stack';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const article =useSelector(getArticleDetailData);
    const canEdit = useSelector(getCanEditArticle);
    const onBackToList = useCallback(()=>{
        navigate(getRouteArticles());
    },[navigate]);
    const onEditArticle = useCallback(()=>{
        if(article){
            navigate(getRouteArticleEdit(article.id));
        }
    },[article, navigate]);
    return (
        <HStack max justify='between'  className={classNames('', {}, [className])}>

            <Button theme={ThemeButton.OUTLINED} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {canEdit && <Button theme={ThemeButton.OUTLINED} onClick={onEditArticle}>
                {t('Редактировать')}
            </Button>}
        </HStack>
    );
});
