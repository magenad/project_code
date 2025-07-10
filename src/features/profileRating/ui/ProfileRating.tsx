import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { useGetProfileRating, useRateProfile } from '../api/profileRatingApi';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { RatingCard } from '@/entities/Rating';

export interface ProfileRatingProps {
    className?: string;
    profileId?: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetProfileRating({
        profileId: profileId ?? '',
        userId: userData?.id ?? ''
    });
    const [rateArticleMutation] = useRateProfile();
    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                profileId: profileId ?? '',
                rate: starsCount,
                feedback
            })
            ;
        } catch (e) {
            console.log(e);
        }

    }, [profileId, rateArticleMutation, userData?.id]);
    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);
    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);
    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }
    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('Оцените пользователя')}
            feedbackTitle={t('Оставьте свой отзыв о пользователе.')}
            hasFeedback

        />

    );
});
export default ProfileRating;
