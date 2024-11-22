import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModel, setIsAuthModel] = useState<boolean>(false);
    const onCloseModal = useCallback ((): void => {
        setIsAuthModel(false);
    },[]);
    const onShowModal = useCallback ((): void => {
        setIsAuthModel(true);
    },[]);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthModel}
                onClose={onCloseModal}/>
        </div>
    );
};

