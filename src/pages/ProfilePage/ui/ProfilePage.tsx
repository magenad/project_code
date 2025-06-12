import { classNames } from 'shared/lib/classNames/classNames';

import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/editableProfileCard';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import {
    EditableProfileCardHeader
} from 'features/editableProfileCard/ui/EditableProfileCardHeader/EditableProfileCardHeader';


interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');

    const { id } = useParams<{ id: string }>();
    if (!id) return <Text text={t('Профиль не найден')} />;
    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCardHeader />
                <EditableProfileCard id={id} />
            </VStack>

        </Page>
    );
};

export default ProfilePage;
