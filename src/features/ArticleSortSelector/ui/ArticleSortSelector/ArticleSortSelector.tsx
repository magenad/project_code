import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { ArticleSortField } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { Select, SelectOptions } from '@/shared/ui/Select';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, order, sort, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation();
    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [
        { value: 'asc', content: t('возрастанию') },
        { value: 'desc', content: t('убыванию') }
    ], [t]);
    const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(() => [
        { value: ArticleSortField.CREATED, content: t('дата создания') },
        { value: ArticleSortField.TITLE, content: t('названию') },
        { value: ArticleSortField.VIEWS, content: t('просмотрам') }
    ], [t]);
    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>

            <Select<ArticleSortField>
                value={sort}
                options={sortFieldOptions}
                label={t('Сортировать ПО')}
                onChange={onChangeSort}
            />
            <Select<SortOrder>
                value={order}
                options={orderOptions}
                label={t('по')}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
});