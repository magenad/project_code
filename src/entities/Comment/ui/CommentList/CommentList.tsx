import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { Comment } from '../../model/types/comment';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { VStack } from '@/shared/ui/Stack';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className,isLoading,comments } = props;
    const { t } = useTranslation();
    if(isLoading){
        return (
            <VStack gap='16' max className={classNames('', {}, [className])}>
                <CommentCard  isLoading/>
                <CommentCard  isLoading/>
                <CommentCard  isLoading/>
            </VStack>
        );
    }
    return (
        <VStack gap='16' max className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map(comment=>(
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
                :<Text text={t('Комментарии отсутствуют')}/>
            }
        </VStack>
    );
});
