import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { Button } from '../../../Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from '../../../Stack';
import { DropdownDirection } from 'shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
    opened?:boolean;
}


export function ListBox(props: ListBoxProps) {
    const { className, items, value, defaultValue, onChange, readonly, direction = 'bottom right', label,opened=false } = props;
    return (
        <HStack gap="4">
            {label && <span>{label + '>'}</span>}
            <HListbox
                disabled={readonly}
                as={'div'}
                value={value}
                onChange={onChange}
                className={classNames(cls.ListBox, {}, [className,popupCls.popup])}
            >

                <HListbox.Button as={'div'} className={cls.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>

                </HListbox.Button>
                <HListbox.Options className={classNames(cls.options, {}, [mapDirectionClass[direction]])} static={opened}>
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(cls.item, {
                                    [popupCls.active]: active,
                                    [popupCls.disabled]: item.disabled
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
}