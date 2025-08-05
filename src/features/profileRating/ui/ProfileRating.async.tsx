import { lazy, Suspense } from 'react';
import { ProfileRatingProps } from './ProfileRating';

const ProfileRatingLazy = lazy(() => import('./ProfileRating'));

export const ProfileRatingAsync = (props: ProfileRatingProps) => (
    <Suspense>
        <ProfileRatingLazy {...props} />
    </Suspense>
);
