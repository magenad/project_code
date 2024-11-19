import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/provider/ErrorBoundary';
import { Counter } from 'app/entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            <BugButton/>
            {t('Главная страница')}
            <Counter/>
        </div>
    );
};

export default MainPage;