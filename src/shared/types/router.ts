import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line my/layer-imports
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}