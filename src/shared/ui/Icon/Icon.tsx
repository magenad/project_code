import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import React, { memo } from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement>{
    className?: string;
    Svg:React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?:boolean;
}

export const Icon = memo(({ className,Svg,inverted,...otherProps }: IconProps) => {
    return (
        <Svg
            className={classNames( inverted ? cls.inverted: cls.Icon, {}, [className])}
            {...otherProps}
        />
    );
});
