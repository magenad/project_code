import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'app/entities/Counter';

const AboutPage = () => {
    const { t } =useTranslation('about');
    return (
        <div>
            {t('О сайте')}
            <Counter/>
        </div>

    );
};

export default AboutPage;