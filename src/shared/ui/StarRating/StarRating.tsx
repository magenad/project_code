import { classNames } from '../../lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './StarRating.module.scss';
import { memo, useState } from 'react';
import { Icon } from '@/shared/ui/Icon/Icon';
import StarIcon from '../../assets/icons/star.svg';

interface StarRatingProps {
    className?: string;
    onSelect?: (startCount: number) => void;
    size?: number;
    selectedStars?: number;

}

const stars = [1, 2, 3, 4, 5];
export const StarRating = memo((props: StarRatingProps) => {
    const { className, size = 30, selectedStars = 0, onSelect } = props;
    const [isHovered,setIsHovered]=useState(false);
    const [currentStarsCount,setCurrentStarsCount]= useState(0);
    const [isSelected,setIsSelected]=useState(false);
    const onHover = (starsCount:number)=>()=>{
        if(!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };
    const onLeave = ()=>{
        if(!isSelected) {
            setCurrentStarsCount(0);
        }
    };
    const onClick=(starsCount:number)=>()=>{
        if(!isSelected){
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map(starNumber => (
                <Icon
                    className={classNames(
                        cls.starIcon,
                        { [cls.selected]:isSelected },
                        [currentStarsCount>=starNumber ? cls.hovered : cls.normal]
                    )}
                    Svg={StarIcon}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}

                />
            ))}

        </div>
    );
});
