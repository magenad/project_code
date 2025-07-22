import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from '@/features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Text, ThemeText } from '@/shared/ui/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { getRouteArticleCreate } from '@/shared/const/router';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModel, setIsAuthModel] = useState<boolean>(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback((): void => {
        setIsAuthModel(false);
    }, []);
    const onShowModal = useCallback((): void => {
        setIsAuthModel(true);
    }, []);
    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('Демонстрация APP')}
                    theme={ThemeText.INVERTED}
                />
                <AppLink
                    to={getRouteArticleCreate()}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('Создать статью')}
                </AppLink>
                <HStack gap='16' className={cls.actions}>
                    <NotificationButton/>
                    <AvatarDropdown/>
                </HStack>

            </header>
        );
    }
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModel && (
                <LoginModal isOpen={isAuthModel} onClose={onCloseModal} />
            )}
        </div>
    );
};
