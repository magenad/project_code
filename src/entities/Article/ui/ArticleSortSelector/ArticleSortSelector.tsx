import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleSortSelector.module.scss';
import { memo, useMemo } from 'react';
import { Select, SelectOptions } from '@/shared/ui/Select/Select';
import { SortOrder } from '@/shared/types';
import { ArticleSortField } from '../../model/consts/consts';

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
