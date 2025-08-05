import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { useNotifications } from '../../api/notificationApi';
import { VStack } from '@/shared/ui/Stack';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Skeleton } from '@/shared/ui/Skeleton';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });
    console.log('NotificationList', isLoading, className);
    if (isLoading) {
        return (
            <VStack gap='16' className={classNames('', {}, [className])}>
                <Skeleton width={'100%'} border='8px' height='80px' />
                <Skeleton width={'100%'} border='8px' height='80px' />
                <Skeleton width={'100%'} border='8px' height='80px' />
            </VStack>
        );
    }
    return (
        <VStack gap='16' className={classNames('', {}, [className])}>
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
