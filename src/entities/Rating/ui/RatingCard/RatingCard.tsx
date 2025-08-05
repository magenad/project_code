import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        feedbackTitle,
        hasFeedback,
        onAccept,
        onCancel,
        title,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isModelOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');
    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );
    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);
    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modelContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                placeholder={t('Ваш отзыв')}
                value={feedback}
                onChange={setFeedback}
                data-testid={'RatingCard.Input'}
            />
        </>
    );

    return (
        <Card
            data-testid={'RatingCard'}
            className={classNames('', {}, [className])}
            max
        >
            <VStack align={'center'} gap={'8'} max>
                <Text title={starsCount ? t('Спасибо за оценку') : title} />
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>

            <BrowserView>
                <Modal isOpen={isModelOpen} lazy>
                    <VStack max gap={'32'}>
                        {modelContent}
                        <HStack max gap={'16'} justify={'end'}>
                            <Button
                                data-testid={'RatingCard.Close'}
                                theme={ThemeButton.OUTLINE_RED}
                                onClick={cancelHandle}
                            >
                                {t('Закрыть')}
                            </Button>
                            <Button
                                data-testid={'RatingCard.Send'}
                                onClick={acceptHandle}
                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>

            <MobileView>
                <Drawer isOpen={isModelOpen} lazy>
                    {modelContent}
                    <Button
                        onClick={acceptHandle}
                        size={ButtonSize.L}
                        fullWidth
                    >
                        {t('Отправить')}
                    </Button>
                </Drawer>
            </MobileView>
        </Card>
    );
});
