import { ArticleView } from '@/entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon
    }, {
        view: ArticleView.BIG,
        icon: ListIcon
    }
];
export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, onViewClick, view } = props;
    const { t } = useTranslation();
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);

    };
    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map(viewType => (
                <Button
                    theme={ThemeButton.CLEAR}
                    key={viewType.view}
                    onClick={onClick(viewType.view)}

                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
    );
});