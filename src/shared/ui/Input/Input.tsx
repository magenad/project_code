import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import React, { ChangeEvent, InputHTMLAttributes, memo, SyntheticEvent, useEffect, useRef, useState } from 'react';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'> {
    className?:string;
    value?:string | number;
    onChange?:(value:string) => void;
    autofocus?: boolean;
    readonly?:boolean;
}

export const Input = memo(function Input (props:InputProps) {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props;
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition,setCaretPosition]=useState(0);
    const isCaretVisible = isFocused && !readonly;

    useEffect(()=>{
        if(autofocus){
            setIsFocused(true);
            ref.current?.focus();
        }
    },[autofocus]);
    const onBlur = () => {
        setIsFocused(false);
    };
    const onFocus = () => {
        setIsFocused(true);
    };
    const onSelect = (e:SyntheticEvent<HTMLInputElement,Event> ) => {
        setCaretPosition(e?.currentTarget.selectionStart || 0);
    };
    const mods: Mods = {
        [cls.readonly]:readonly
    };

    return (
        <div className={classNames(cls.InputWraper, mods ,[className])}>
            {placeholder && (<div className={cls.plaseholder}>
                {placeholder + '>'}
            </div>)}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCaretVisible &&
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition*9}px` }}
                    />
                }
            </div>

        </div>
    );
});
