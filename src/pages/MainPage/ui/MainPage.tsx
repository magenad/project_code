import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/provider/ErrorBoundary';
import { Page } from 'widgets/Page/Page';
import { HStack } from 'shared/ui/Stack';
import { ListBox } from 'shared/ui/ListBox/ListBox';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <Page>
            <BugButton />
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;