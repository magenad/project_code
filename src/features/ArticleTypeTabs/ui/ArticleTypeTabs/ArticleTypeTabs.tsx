import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(({ className, value, onChangeType }: ArticleTypeTabsProps) => {
    const { t } = useTranslation();
    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все статьи')
        }, {
            value: ArticleType.IT,
            content: t('АйТи')
        }, {
            value: ArticleType.ECONOMICS,
            content: t('Экономика')
        }, {
            value: ArticleType.SCIENCE,
            content: t('Наука')
        }
    ], [t]);
    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);
    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />

    );
});