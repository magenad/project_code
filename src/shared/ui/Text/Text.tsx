import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum ThemeText {
    PRIMARY = 'primary',
    ERROR = 'error',
}
export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'CENTER',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: ThemeText;
    align?: TextAlign
}

export const Text = (props: TextProps) => {
    const { className, text, title, theme = ThemeText.PRIMARY,align  = TextAlign.LEFT } = props;
    const mods:Mods = {
        [cls[theme]]:true,
        [cls[align]]:true,
        
    };
    return (
        <div
            className={classNames(cls.Text,  mods , [
                className,
            ])}
        >
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
