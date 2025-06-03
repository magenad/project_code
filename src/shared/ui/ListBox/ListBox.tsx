import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import cls from './ListBox.module.scss';
import { Button } from '../Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from 'shared/ui/Stack';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export function ListBox(props: ListBoxProps) {
    const { className, items, value, defaultValue, onChange, readonly, direction = 'bottom', label } = props;
    const optionsClasses = [cls[`options_${direction}`]];
    return (
        <HStack gap='4'>
            {label && <span>{label + '>'}</span>}
            <HListbox
                disabled={readonly}
                as={'div'}
                value={value}
                onChange={onChange}
                className={classNames(cls.ListBox, {}, [className])}
            >

                <HListbox.Button className={cls.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>

                </HListbox.Button>
                <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(cls.item, {
                                    [cls.active]: active,
                                    [cls.disabled]: item.disabled
                                })}>
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}

                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>

    );
};