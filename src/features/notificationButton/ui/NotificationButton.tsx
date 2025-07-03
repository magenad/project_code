import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { memo } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notification';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(({ className }: NotificationButtonProps) => {

    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            trigger={(

                <Button theme={ThemeButton.CLEAR}>
                    <Icon Svg={NotificationIcon} inverted />
                </Button>
            )}
            direction="bottom left"
        >
            <NotificationList className={cls.notifications} />
        </Popover>

    );
});
