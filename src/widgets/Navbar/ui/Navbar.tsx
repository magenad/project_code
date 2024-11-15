import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModel, setIsAuthModel] = useState<boolean>(false);
    const onToggleModal =useCallback ((): void => {
        setIsAuthModel(!isAuthModel);
    },[isAuthModel]);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModel} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa distinctio earum excepturi facilis id labore mollitia nostrum quia soluta temporibus!
            </Modal>
        </div>
    );
};

