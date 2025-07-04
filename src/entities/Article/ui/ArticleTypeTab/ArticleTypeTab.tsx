import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';

import { ArticleType } from '../../model/consts/consts';

interface ArticleTypeTabProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTab = memo(({ className, value, onChangeType }: ArticleTypeTabProps) => {
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
